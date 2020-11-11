import { Box } from "@artsy/palette"
import { NAV_BAR_HEIGHT, NavBar } from "v2/Components/NavBar"

export default function Baseline() {
  return (
    <Box>
      <Box pb={NAV_BAR_HEIGHT}>
        <Box left={0} position="fixed" width="100%" zIndex={100}>
          <NavBar />
        </Box>
      </Box>
      <Box>baseline</Box>
    </Box>
  )
}
