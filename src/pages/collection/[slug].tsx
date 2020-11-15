import { initEnvironment } from "next/createEnvironment"
import { fetchQuery, graphql } from "react-relay"
import { useQuery } from "relay-hooks"
import { useRouter } from "next/router"
import { paramsToCamelCase } from "v2/Components/v2/ArtworkFilter/Utils/urlBuilder"
import CollectionRefetchContainer from "v2/Apps/Collect/Routes/Collection"

const query = graphql`
  query CollectionAppQuery(
    $acquireable: Boolean
    $aggregations: [ArtworkAggregation] = [
      MERCHANDISABLE_ARTISTS
      MEDIUM
      MAJOR_PERIOD
      TOTAL
    ]
    $atAuction: Boolean
    $color: String
    $forSale: Boolean
    $height: String
    $inquireableOnly: Boolean
    $majorPeriods: [String]
    $medium: String
    $offerable: Boolean
    $page: Int
    $priceRange: String
    $sizes: [ArtworkSizes]
    $sort: String
    $slug: String!
    $width: String
  ) {
    collection: marketingCollection(slug: $slug) {
      ...Collection_collection
        @arguments(
          acquireable: $acquireable
          aggregations: $aggregations
          atAuction: $atAuction
          color: $color
          forSale: $forSale
          height: $height
          inquireableOnly: $inquireableOnly
          majorPeriods: $majorPeriods
          medium: $medium
          offerable: $offerable
          page: $page
          priceRange: $priceRange
          sizes: $sizes
          sort: $sort
          width: $width
          first: 30
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

export default function CollectionApp() {
  const router = useRouter()
  const { error, props } = useQuery(query, {
    slug: router.query.slug,
    sort: "-decayed_merch",
  })

  if (error) {
    console.error("Error rendering:", error)
    return null
  }
  if (router.isFallback || !props) {
    return <div>Loading</div>
  }

  return <CollectionRefetchContainer collection={props.collection} />
}

// Or, getServerSideProps / getStaticProps
export async function getStaticProps(context) {
  const { environment, relaySSR } = initEnvironment()
  const slug = context?.query?.slug ?? context?.params?.slug
  const variables = initializeVariablesWithFilterState({}, {})

  await fetchQuery(environment, query, { slug, ...variables })
  const relayData = (await relaySSR.getCache())?.[0]
  const data = !relayData ? null : [[relayData[0], relayData[1].json]]

  return {
    props: {
      relayData: data,
    },
  }
}

export async function getStaticPaths() {
  const paths = getCollectionSlugs()
  return {
    paths,
    fallback: "blocking",
  }
}

function getCollectionSlugs() {
  return [
    "post-war",
    "impressionist-and-modern",
    "pre-20th-century",
    "photography",
    "street-art",
  ].map(collection => {
    return {
      params: {
        slug: collection,
      },
    }
  })
}
