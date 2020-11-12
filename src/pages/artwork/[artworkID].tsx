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
    return <div>{error.message}</div>
  }
  if (!props) {
    return <div>Loading</div>
  }

  return <ArtworkAppFragmentContainer artwork={props.artwork} />
}

export async function getServerSideProps(context) {
  const { environment, relaySSR } = initEnvironment()
  const { artworkID } = context.query

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
