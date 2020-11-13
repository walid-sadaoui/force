import { initEnvironment } from "next/createEnvironment"
import { fetchQuery, graphql } from "react-relay"
import ArtistAppFragmentContainer from "v2/Apps/Artist/ArtistApp"
import { useRouter } from "next/router"
import { useQuery } from "relay-hooks"

const query = graphql`
  query routes_ArtistTopLevelQuery($artistID: String!) @raw_response_type {
    artist(id: $artistID) @principalField {
      ...ArtistApp_artist
      ...routes_Artist @relay(mask: false)
    }
  }
`

export default function ArtistApp() {
  const router = useRouter()
  const { error, props } = useQuery(query, {
    artistID: router.query?.artistID?.[0],
  })

  if (error) {
    console.error("Error rendering:", error)
    return null
  }
  if (router.isFallback || !props) {
    return <div>Loading</div>
  }

  return (
    <ArtistAppFragmentContainer
      artist={props.artist as any}
      params={{
        artistID: router.query.artistID,
      }}
      match={{}}
    />
  )
}

// Or, getServerSideProps / getStaticProps
export async function getStaticProps(context) {
  const { environment, relaySSR } = initEnvironment()
  const artistID = context?.query?.artistID ?? context?.params?.artistID

  await fetchQuery(environment, query, { artistID: artistID[0] })
  const relayData = (await relaySSR.getCache())?.[0]
  const data = !relayData ? null : [[relayData[0], relayData[1].json]]

  return {
    props: {
      relayData: data,
    },
  }
}

export async function getStaticPaths() {
  const paths = getArtistIDs()
  return {
    paths,
    fallback: "blocking",
  }
}

function getArtistIDs() {
  return [
    {
      slug: "amber-goldhammer",
    },
    {
      slug: "agnes-martin",
    },
    {
      slug: "julie-mehretu",
    },
    {
      slug: "eddie-martinez",
    },
    {
      slug: "otis-kwame-kye-quaicoe",
    },
    {
      slug: "lee-ufan",
    },
    {
      slug: "zanele-muholi",
    },
    {
      slug: "massimo-vitali/",
    },
  ].map(artist => {
    return {
      params: {
        artistID: [artist.slug, "works-for-sale"],
      },
    }
  })
}
