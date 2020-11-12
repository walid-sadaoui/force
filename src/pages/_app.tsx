import { RelayEnvironmentProvider } from "relay-hooks"
import { createEnvironment } from "../next/createEnvironment"
import { Grid, Theme, injectGlobalStyles, themeProps } from "@artsy/palette"
import { SystemContextProvider, track } from "v2/Artsy"
import { ErrorBoundary } from "v2/Artsy/Router/ErrorBoundary"
import { AnalyticsContext } from "v2/Artsy/Analytics/AnalyticsContext"
import { MediaContextProvider, ResponsiveProvider } from "v2/Utils/Responsive"
import { FocusVisible } from "v2/Components/FocusVisible"
import { HeadProvider } from "react-head"
import Events from "v2/Utils/Events"
import { NextAppShell } from "next/createEnvironment/AppShell"

const { GlobalStyles } = injectGlobalStyles()

const Boot = track(null, {
  dispatch: Events.postEvent,
})(({ Component, pageProps }) => {
  const environment = createEnvironment(pageProps.relayData)

  return (
    <Theme>
      <SystemContextProvider relayEnvironment={environment}>
        <AnalyticsContext.Provider value={{}}>
          <ErrorBoundary>
            <MediaContextProvider>
              <ResponsiveProvider
                mediaQueries={themeProps.mediaQueries}
                // initialMatchingMediaQueries={onlyMatchMediaQueries as any}
              >
                <Grid fluid maxWidth="100%">
                  <RelayEnvironmentProvider environment={environment}>
                    <FocusVisible />
                    <GlobalStyles />
                    <NextAppShell>
                      <Component {...pageProps} />
                    </NextAppShell>
                  </RelayEnvironmentProvider>
                </Grid>
              </ResponsiveProvider>
            </MediaContextProvider>
          </ErrorBoundary>
        </AnalyticsContext.Provider>
      </SystemContextProvider>
    </Theme>
  )
})

export default Boot
