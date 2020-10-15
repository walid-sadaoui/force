/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkImageBrowserContainerQueryVariables = {
    artworkID: string;
};
export type ArtworkImageBrowserContainerQueryResponse = {
    readonly artwork: {
        readonly " $fragmentRefs": FragmentRefs<"ArtworkImageBrowserContainer_artwork">;
    } | null;
};
export type ArtworkImageBrowserContainerQuery = {
    readonly response: ArtworkImageBrowserContainerQueryResponse;
    readonly variables: ArtworkImageBrowserContainerQueryVariables;
};



/*
query ArtworkImageBrowserContainerQuery(
  $artworkID: String!
) {
  artwork(id: $artworkID) {
    ...ArtworkImageBrowserContainer_artwork
    id
  }
}

fragment ArtworkActions_artwork on Artwork {
  ...Save_artwork
  ...ArtworkSharePanel_artwork
  artists {
    name
    id
  }
  date
  dimensions {
    cm
  }
  href
  slug
  image {
    internalID
    url(version: "larger")
    height
    width
  }
  is_downloadable: isDownloadable
  is_hangable: isHangable
  partner {
    slug
    id
  }
  title
  sale {
    is_closed: isClosed
    is_auction: isAuction
    id
  }
}

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

fragment ArtworkSharePanel_artwork on Artwork {
  href
  images {
    url
  }
  artworkMeta: meta {
    share
  }
}

fragment Save_artwork on Artwork {
  id
  internalID
  slug
  is_saved: isSaved
  title
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkImageBrowserContainerQuery",
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
            "name": "ArtworkImageBrowserContainer_artwork"
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
    "name": "ArtworkImageBrowserContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": "is_saved",
            "args": null,
            "kind": "ScalarField",
            "name": "isSaved",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "href",
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
                "name": "url",
                "storageKey": null
              },
              (v3/*: any*/),
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
                  (v5/*: any*/),
                  (v6/*: any*/)
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
            "alias": "artworkMeta",
            "args": null,
            "concreteType": "ArtworkMeta",
            "kind": "LinkedField",
            "name": "meta",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "share",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "date",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "dimensions",
            "kind": "LinkedField",
            "name": "dimensions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cm",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "image",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "larger"
                  }
                ],
                "kind": "ScalarField",
                "name": "url",
                "storageKey": "url(version:\"larger\")"
              },
              (v6/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "is_downloadable",
            "args": null,
            "kind": "ScalarField",
            "name": "isDownloadable",
            "storageKey": null
          },
          {
            "alias": "is_hangable",
            "args": null,
            "kind": "ScalarField",
            "name": "isHangable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Partner",
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "sale",
            "plural": false,
            "selections": [
              {
                "alias": "is_closed",
                "args": null,
                "kind": "ScalarField",
                "name": "isClosed",
                "storageKey": null
              },
              {
                "alias": "is_auction",
                "args": null,
                "kind": "ScalarField",
                "name": "isAuction",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "alt",
            "args": null,
            "kind": "ScalarField",
            "name": "formattedMetadata",
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
    "name": "ArtworkImageBrowserContainerQuery",
    "operationKind": "query",
    "text": "query ArtworkImageBrowserContainerQuery(\n  $artworkID: String!\n) {\n  artwork(id: $artworkID) {\n    ...ArtworkImageBrowserContainer_artwork\n    id\n  }\n}\n\nfragment ArtworkActions_artwork on Artwork {\n  ...Save_artwork\n  ...ArtworkSharePanel_artwork\n  artists {\n    name\n    id\n  }\n  date\n  dimensions {\n    cm\n  }\n  href\n  slug\n  image {\n    internalID\n    url(version: \"larger\")\n    height\n    width\n  }\n  is_downloadable: isDownloadable\n  is_hangable: isHangable\n  partner {\n    slug\n    id\n  }\n  title\n  sale {\n    is_closed: isClosed\n    is_auction: isAuction\n    id\n  }\n}\n\nfragment ArtworkImageBrowserContainer_artwork on Artwork {\n  ...ArtworkActions_artwork\n  ...ArtworkImageBrowser_artwork\n  image {\n    internalID\n  }\n  images {\n    internalID\n  }\n}\n\nfragment ArtworkImageBrowser_artwork on Artwork {\n  alt: formattedMetadata\n  images {\n    internalID\n    resized(width: 640, height: 640) {\n      src\n      srcSet\n      width\n      height\n    }\n    isZoomable\n    deepZoom {\n      Image {\n        xmlns\n        Url\n        Format\n        TileSize\n        Overlap\n        Size {\n          Width\n          Height\n        }\n      }\n    }\n  }\n}\n\nfragment ArtworkSharePanel_artwork on Artwork {\n  href\n  images {\n    url\n  }\n  artworkMeta: meta {\n    share\n  }\n}\n\nfragment Save_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n"
  }
};
})();
(node as any).hash = 'ccdcc5372bacb3615071179b182bf0cc';
export default node;
