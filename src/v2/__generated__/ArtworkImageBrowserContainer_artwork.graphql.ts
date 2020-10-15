/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkImageBrowserContainer_artwork = {
    readonly image: {
        readonly internalID: string | null;
    } | null;
    readonly images: ReadonlyArray<{
        readonly internalID: string | null;
    } | null> | null;
    readonly " $fragmentRefs": FragmentRefs<"ArtworkActions_artwork" | "ArtworkImageBrowser_artwork">;
    readonly " $refType": "ArtworkImageBrowserContainer_artwork";
};
export type ArtworkImageBrowserContainer_artwork$data = ArtworkImageBrowserContainer_artwork;
export type ArtworkImageBrowserContainer_artwork$key = {
    readonly " $data"?: ArtworkImageBrowserContainer_artwork$data;
    readonly " $fragmentRefs": FragmentRefs<"ArtworkImageBrowserContainer_artwork">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "internalID",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkImageBrowserContainer_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkActions_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkImageBrowser_artwork"
    }
  ],
  "type": "Artwork"
};
})();
(node as any).hash = '69e13bd17b10780ccbf82abb8c3cb62e';
export default node;
