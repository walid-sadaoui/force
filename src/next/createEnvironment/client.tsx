import RelaySSR from "react-relay-network-modern-ssr/node8/client"
import { Environment, RecordSource, Store } from "relay-runtime"

import {
  RelayNetworkLayer,
  cacheMiddleware,
  loggerMiddleware,
  urlMiddleware,
} from "react-relay-network-modern/node8"

const source = new RecordSource()
const store = new Store(source)

let storeEnvironment = null

export default {
  createEnvironment: relayData => {
    if (storeEnvironment) return storeEnvironment

    const relaySSRMiddleware = new RelaySSR(relayData)
    relaySSRMiddleware.debug = true

    storeEnvironment = new Environment({
      store,
      network: new RelayNetworkLayer([
        loggerMiddleware(),
        cacheMiddleware({
          size: 100,
          ttl: 60 * 1000,
        }),
        relaySSRMiddleware.getMiddleware({
          lookup: false,
        }),
        urlMiddleware({
          url: req => process.env.METAPHYSICS_ENDPOINT + "/v2",
        }),
      ]),
    })

    return storeEnvironment
  },
}
