import { ArtworkImageBrowserContainer_artwork } from "v2/__generated__/ArtworkImageBrowserContainer_artwork.graphql"
import { ArtworkImageBrowserContainerQuery } from "v2/__generated__/ArtworkImageBrowserContainerQuery.graphql"
import { SystemContext } from "v2/Artsy"
import { renderWithLoadProgress } from "v2/Artsy/Relay/renderWithLoadProgress"
import { SystemQueryRenderer as QueryRenderer } from "v2/Artsy/Relay/SystemQueryRenderer"
import React, { useContext } from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { ArtworkActionsFragmentContainer as ArtworkActions } from "./ArtworkActions"
import { ArtworkImageBrowserFragmentContainer as ArtworkImageBrowser } from "./ArtworkImageBrowser"
import { Box } from "@artsy/palette"
import { ContextModule } from "@artsy/cohesion"

export interface ArtworkImageBrowserContainerProps {
  artwork: ArtworkImageBrowserContainer_artwork
}

export class ArtworkImageBrowserContainer extends React.Component<
  ArtworkImageBrowserContainerProps
> {
  carousel = null

  render() {
    const {
      artwork,
      artwork: { images, image },
    } = this.props

    if (images.length === 0) {
      return null
    }

    const defaultImageIndex = images.findIndex(
      e => e.internalID === image.internalID
    )

    return (
      <Box data-test={ContextModule.artworkImage}>
        <ArtworkImageBrowser artwork={artwork} />
        <ArtworkActions
          selectDefaultSlide={() => {
            this.carousel.select(defaultImageIndex, false, true)
          }}
          artwork={this.props.artwork}
        />
      </Box>
    )
  }
}

export const ArtworkImageBrowserFragmentContainer = createFragmentContainer<
  ArtworkImageBrowserContainerProps
>(ArtworkImageBrowserContainer, {
  artwork: graphql`
    fragment ArtworkImageBrowserContainer_artwork on Artwork {
      ...ArtworkActions_artwork
      ...ArtworkImageBrowser_artwork
      image {
        internalID
      }
      images {
        internalID
      }
    }
  `,
})

export const ArtworkImageBrowserContainerQueryRenderer = ({
  artworkID,
}: {
  artworkID: string
}) => {
  const { relayEnvironment } = useContext(SystemContext)

  return (
    <QueryRenderer<ArtworkImageBrowserContainerQuery>
      environment={relayEnvironment}
      variables={{ artworkID }}
      query={graphql`
        query ArtworkImageBrowserContainerQuery($artworkID: String!) {
          artwork(id: $artworkID) {
            ...ArtworkImageBrowserContainer_artwork
          }
        }
      `}
      render={renderWithLoadProgress(ArtworkImageBrowserFragmentContainer)}
    />
  )
}
