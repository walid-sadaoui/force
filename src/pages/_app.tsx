import { RelayEnvironmentProvider } from "relay-hooks"
import { createEnvironment } from "../next/createEnvironment"
import { Theme, injectGlobalStyles } from "@artsy/palette"

const { GlobalStyles } = injectGlobalStyles()

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <RelayEnvironmentProvider
        environment={createEnvironment(pageProps.relayData)}
      >
        <GlobalStyles />
        <Component {...pageProps} />
      </RelayEnvironmentProvider>
    </Theme>
  )
}
