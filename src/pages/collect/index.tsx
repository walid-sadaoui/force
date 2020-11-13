import { initEnvironment } from "next/createEnvironment"
import { fetchQuery, graphql } from "react-relay"
import { paramsToCamelCase } from "v2/Components/v2/ArtworkFilter/Utils/urlBuilder"
import { useRouter } from "next/router"
import { useQuery } from "relay-hooks"
import CollectAppFragmentContainer from "v2/Apps/Collect/Routes/Collect"

const query = graphql`
  query collectRoutes_ArtworkFilterQuery(
    $acquireable: Boolean
    $aggregations: [ArtworkAggregation] = [TOTAL]
    $artistID: String
    $atAuction: Boolean
    $attributionClass: [String]
    $color: String
    $forSale: Boolean
    $height: String
    $inquireableOnly: Boolean
    $majorPeriods: [String]
    $medium: String
    $offerable: Boolean
    $page: Int
    $partnerID: ID
    $priceRange: String
    $sizes: [ArtworkSizes]
    $sort: String
    $keyword: String
    $width: String
  ) {
    marketingHubCollections {
      ...Collect_marketingHubCollections
    }
    filterArtworks: artworksConnection(
      aggregations: $aggregations
      sort: $sort
      first: 30
    ) {
      ...SeoProductsForArtworks_artworks
    }
    viewer {
      ...ArtworkFilter_viewer
        @arguments(
          acquireable: $acquireable
          aggregations: $aggregations
          artistID: $artistID
          atAuction: $atAuction
          attributionClass: $attributionClass
          color: $color
          forSale: $forSale
          height: $height
          inquireableOnly: $inquireableOnly
          keyword: $keyword
          majorPeriods: $majorPeriods
          medium: $medium
          offerable: $offerable
          page: $page
          partnerID: $partnerID
          priceRange: $priceRange
          sizes: $sizes
          sort: $sort
          width: $width
        )
    }
  }
`

function initializeVariablesWithFilterState(params, props) {
  const initialFilterState = props.location ? props.location.query : {}

  if (params.medium) {
    initialFilterState.medium = params.medium

    if (props.location.query) {
      props.location.query.medium = params.medium
    }
  }

  const state = {
    ...paramsToCamelCase(initialFilterState),
    ...params,
    sort: "-decayed_merch",
  }

  return state
}

export default function CollectApp() {
  const router = useRouter()
  const { error, props } = useQuery(query, {
    artworkID: router.query.artworkID,
    sort: "-decayed_merch",
  })

  if (error) {
    console.error("Error rendering:", error)
    return null
  }
  if (router.isFallback || !props) {
    return <div>Loading</div>
  }

  const {
    filterArtworks,
    marketingHubCollections,
    // @ts-ignore
    match,
    viewer,
  } = props as any

  return (
    <CollectAppFragmentContainer
      filterArtworks={filterArtworks}
      marketingHubCollections={marketingHubCollections}
      viewer={viewer}
      match={{
        //@ts-ignore
        location: {},
        params: {},
      }}
    />
  )
}

// Or, getServerSideProps
export async function getStaticProps(context) {
  const { environment, relaySSR } = initEnvironment()
  const variables = initializeVariablesWithFilterState({}, {})

  await fetchQuery(environment, query, variables)
  const relayData = (await relaySSR.getCache())?.[0]
  const data = !relayData ? null : [[relayData[0], relayData[1].json]]

  return {
    props: {
      relayData: data,
    },
  }
}
