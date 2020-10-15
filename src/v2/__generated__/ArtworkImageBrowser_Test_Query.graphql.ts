/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkImageBrowser_Test_QueryVariables = {
    artworkID: string;
};
export type ArtworkImageBrowser_Test_QueryResponse = {
    readonly artwork: {
        readonly " $fragmentRefs": FragmentRefs<"ArtworkImageBrowser_artwork">;
    } | null;
};
export type ArtworkImageBrowser_Test_QueryRawResponse = {
    readonly artwork: ({
        readonly alt: string | null;
        readonly images: ReadonlyArray<({
            readonly internalID: string | null;
            readonly resized: ({
                readonly src: string;
                readonly srcSet: string;
                readonly width: number | null;
                readonly height: number | null;
            }) | null;
            readonly isZoomable: boolean | null;
            readonly deepZoom: ({
                readonly Image: ({
                    readonly xmlns: string | null;
                    readonly Url: string | null;
                    readonly Format: string | null;
                    readonly TileSize: number | null;
                    readonly Overlap: number | null;
                    readonly Size: ({
                        readonly Width: number | null;
                        readonly Height: number | null;
                    }) | null;
                }) | null;
            }) | null;
        }) | null> | null;
        readonly id: string | null;
    }) | null;
};
export type ArtworkImageBrowser_Test_Query = {
    readonly response: ArtworkImageBrowser_Test_QueryResponse;
    readonly variables: ArtworkImageBrowser_Test_QueryVariables;
    readonly rawResponse: ArtworkImageBrowser_Test_QueryRawResponse;
};



/*
query ArtworkImageBrowser_Test_Query(
  $artworkID: String!
) {
  artwork(id: $artworkID) {
    ...ArtworkImageBrowser_artwork
    id
  }
}

fragment ArtworkImageBrowser_artwork on Artwork {
  alt: formattedMetadata
  images {
    internalID
    resized(width: 640, height: 640) {
      src
      srcSet
      width
      height
    }
    isZoomable
    deepZoom {
      Image {
        xmlns
        Url
        Format
        TileSize
        Overlap
        Size {
          Width
          Height
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artworkID",
    "type": "String!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkImageBrowser_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtworkImageBrowser_artwork"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtworkImageBrowser_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ArtworkImageBrowser_Test_Query",
    "operationKind": "query",
    "text": "query ArtworkImageBrowser_Test_Query(\n  $artworkID: String!\n) {\n  artwork(id: $artworkID) {\n    ...ArtworkImageBrowser_artwork\n    id\n  }\n}\n\nfragment ArtworkImageBrowser_artwork on Artwork {\n  alt: formattedMetadata\n  images {\n    internalID\n    resized(width: 640, height: 640) {\n      src\n      srcSet\n      width\n      height\n    }\n    isZoomable\n    deepZoom {\n      Image {\n        xmlns\n        Url\n        Format\n        TileSize\n        Overlap\n        Size {\n          Width\n          Height\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '30af11b1cab9d8063877a4f946177ce5';
export default node;
