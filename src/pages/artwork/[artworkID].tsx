import { useRouter } from "next/router"
import { initEnvironment } from "next/createEnvironment"
import { fetchQuery, graphql } from "react-relay"

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

export default function ArtworkApp(props) {
  const r = useRouter()
  console.log(props)
  return <h1>test</h1>
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
