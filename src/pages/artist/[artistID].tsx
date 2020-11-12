import { useRouter } from "next/router"
import { initEnvironment } from "next/createEnvironment"
import { fetchQuery, graphql } from "react-relay"

const query = graphql`
  query routes_ArtistTopLevelQuery($artistID: String!) @raw_response_type {
    artist(id: $artistID) @principalField {
      ...ArtistApp_artist
      ...routes_Artist @relay(mask: false)
    }
  }
`

export default function ArtistApp(props) {
  return <h1>test</h1>
}

export async function getServerSideProps(context) {
  const { environment, relaySSR } = initEnvironment()
  const { artistID } = context.query

  // @ts-ignore
  await fetchQuery(environment, query, { artistID })
  const relayData = (await relaySSR.getCache())?.[0]
  const data = !relayData ? null : [[relayData[0], relayData[1].json]]

  return {
    props: {
      relayData: data,
    },
  }
}
