import { initEnvironment } from "next/createEnvironment"
import { fetchQuery, graphql } from "react-relay"
import ArtworkAppFragmentContainer from "v2/Apps/Artwork/ArtworkApp"
import { useQuery } from "relay-hooks"
import { useRouter } from "next/router"

const query = graphql`
  query routes_ArtworkQuery($artworkID: String!) {
    artwork(id: $artworkID) @principalField {
      ...ArtworkApp_artwork
    }
    me {
      ...ArtworkApp_me
    }
  }
`

export default function ArtworkApp() {
  const router = useRouter()
  const { error, props } = useQuery(query, {
    artworkID: router.query.artworkID,
  })

  if (error) {
    console.error("Error rendering:", error)
    return null
  }
  if (router.isFallback || !props) {
    return <div>Loading</div>
  }

  return <ArtworkAppFragmentContainer artwork={props.artwork} />
}

// Or, getServerSideProps
export async function getStaticProps(context) {
  const { environment, relaySSR } = initEnvironment()
  const artworkID = context?.query?.artworkID ?? context?.params?.artworkID

  // @ts-ignore
  await fetchQuery(environment, query, { artworkID })
  const relayData = (await relaySSR.getCache())?.[0]
  const data = !relayData ? null : [[relayData[0], relayData[1].json]]

  return {
    props: {
      relayData: data,
    },
  }
}

export async function getStaticPaths() {
  const paths = getArtworkIDs()
  return {
    paths,
    fallback: "blocking",
  }
}

function getArtworkIDs() {
  return [
    "agnes-martin-praise-25",
    "agnes-martin-on-a-clear-day-number-17-1",
    "agnes-martin-untitled-i-1",
    "agnes-martin-on-a-clear-day-number-22-2",
    "julie-mehretu-stadia-ii",
    "julie-mehretu-easy-dark",
    "julie-mehretu-not-quite-armageddon",
    "eddie-martinez-untitled-300",
    "eddie-martinez-beginner-mind-7",
    "eddie-martinez-untitled-295",
    "otis-kwame-kye-quaicoe-wiyaala",
    "otis-kwame-kye-quaicoe-redrose-and-yellow-beard",
    "otis-kwame-kye-quaicoe-amanda-grace-in-poka-dot-turtleneck",
    "otis-kwame-kye-quaicoe-amanda-grace-in-poka-dot-turtleneck",
    "amber-goldhammer-little-monsters-will-follow",
    "robert-lebsack-my-heart-used-to-dream-of",
    "robert-lebsack-i-feel-you-forgetting",
  ].map(artwork => {
    return {
      params: {
        artworkID: artwork,
      },
    }
  })
}
