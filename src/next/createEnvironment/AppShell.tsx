import { Box } from "@artsy/palette"
import { NAV_BAR_HEIGHT, NavBar } from "v2/Components/NavBar"

export const NextAppShell = ({ children }) => {
  return (
    <Box>
      <Box>
        <Box left={0} position="fixed" width="100%" zIndex={100}>
          <NavBar />
        </Box>
        <Box pt={NAV_BAR_HEIGHT}>{children}</Box>
      </Box>
    </Box>
  )
}
