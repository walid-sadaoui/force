/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkImageBrowser_artwork = {
    readonly alt: string | null;
    readonly images: ReadonlyArray<{
        readonly internalID: string | null;
        readonly resized: {
            readonly src: string;
            readonly srcSet: string;
            readonly width: number | null;
            readonly height: number | null;
        } | null;
        readonly isZoomable: boolean | null;
        readonly deepZoom: {
            readonly Image: {
                readonly xmlns: string | null;
                readonly Url: string | null;
                readonly Format: string | null;
                readonly TileSize: number | null;
                readonly Overlap: number | null;
                readonly Size: {
                    readonly Width: number | null;
                    readonly Height: number | null;
                } | null;
            } | null;
        } | null;
    } | null> | null;
    readonly " $refType": "ArtworkImageBrowser_artwork";
};
export type ArtworkImageBrowser_artwork$data = ArtworkImageBrowser_artwork;
export type ArtworkImageBrowser_artwork$key = {
    readonly " $data"?: ArtworkImageBrowser_artwork$data;
    readonly " $fragmentRefs": FragmentRefs<"ArtworkImageBrowser_artwork">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkImageBrowser_artwork",
  "selections": [
    {
      "alias": "alt",
      "args": null,
      "kind": "ScalarField",
      "name": "formattedMetadata",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        },
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 640
            },
            {
              "kind": "Literal",
              "name": "width",
              "value": 640
            }
          ],
          "concreteType": "ResizedImageUrl",
          "kind": "LinkedField",
          "name": "resized",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "src",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "srcSet",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "width",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "height",
              "storageKey": null
            }
          ],
          "storageKey": "resized(height:640,width:640)"
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isZoomable",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "DeepZoom",
          "kind": "LinkedField",
          "name": "deepZoom",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "DeepZoomImage",
              "kind": "LinkedField",
              "name": "Image",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "xmlns",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "Url",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "Format",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "TileSize",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "Overlap",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "DeepZoomImageSize",
                  "kind": "LinkedField",
                  "name": "Size",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "Width",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "Height",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork"
};
(node as any).hash = 'c1aa5deaa9a69e31c7307baf2122271b';
export default node;
