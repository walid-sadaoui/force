/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkAggregation = "ARTIST" | "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "MAJOR_PERIOD" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL" | "%future added value";
export type routes_ArtistTopLevelQueryVariables = {
    artistID: string;
};
export type routes_ArtistTopLevelQueryResponse = {
    readonly artist: {
        readonly slug: string;
        readonly statuses: {
            readonly shows: boolean | null;
            readonly cv: boolean | null;
            readonly articles: boolean | null;
        } | null;
        readonly counts: {
            readonly forSaleArtworks: number | null;
        } | null;
        readonly related: {
            readonly genes: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly slug: string;
                    } | null;
                } | null> | null;
            } | null;
        } | null;
        readonly highlights: {
            readonly partnersConnection: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly categories: ReadonlyArray<{
                            readonly slug: string;
                        } | null> | null;
                    } | null;
                } | null> | null;
            } | null;
        } | null;
        readonly insights: ReadonlyArray<{
            readonly type: string | null;
        } | null> | null;
        readonly biographyBlurb: {
            readonly text: string | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"ArtistApp_artist" | "Overview_artist">;
    } | null;
};
export type routes_ArtistTopLevelQueryRawResponse = {
    readonly artist: ({
        readonly internalID: string;
        readonly name: string | null;
        readonly slug: string;
        readonly nationality: string | null;
        readonly birthday: string | null;
        readonly deathday: string | null;
        readonly gender: string | null;
        readonly href: string | null;
        readonly meta: ({
            readonly title: string | null;
            readonly description: string | null;
        }) | null;
        readonly alternate_names: ReadonlyArray<string | null> | null;
        readonly image: ({
            readonly versions: ReadonlyArray<string | null> | null;
            readonly large: string | null;
            readonly square: string | null;
            readonly cropped: ({
                readonly url: string;
            }) | null;
        }) | null;
        readonly counts: ({
            readonly artworks: number | null;
            readonly follows: number | null;
            readonly forSaleArtworks: number | null;
            readonly partner_shows: number | null;
            readonly ecommerce_artworks: number | null;
            readonly auction_artworks: number | null;
            readonly has_make_offer_artworks: boolean | null;
            readonly for_sale_artworks: number | null;
        }) | null;
        readonly blurb: string | null;
        readonly artworks_connection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly title: string | null;
                    readonly date: string | null;
                    readonly description: string | null;
                    readonly category: string | null;
                    readonly price_currency: string | null;
                    readonly listPrice: ({
                        readonly __typename: "PriceRange";
                        readonly minPrice: ({
                            readonly major: number;
                            readonly currencyCode: string;
                        }) | null;
                        readonly maxPrice: ({
                            readonly major: number;
                        }) | null;
                    } | {
                        readonly __typename: "Money";
                        readonly major: number;
                        readonly currencyCode: string;
                    } | {
                        readonly __typename: string;
                    }) | null;
                    readonly availability: string | null;
                    readonly href: string | null;
                    readonly image: ({
                        readonly small: string | null;
                        readonly large: string | null;
                    }) | null;
                    readonly partner: ({
                        readonly name: string | null;
                        readonly href: string | null;
                        readonly profile: ({
                            readonly image: ({
                                readonly small: string | null;
                                readonly large: string | null;
                            }) | null;
                            readonly id: string | null;
                        }) | null;
                        readonly id: string | null;
                    }) | null;
                    readonly id: string | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly statuses: ({
            readonly shows: boolean | null;
            readonly cv: boolean | null;
            readonly articles: boolean | null;
            readonly auctionLots: boolean | null;
            readonly artworks: boolean | null;
        }) | null;
        readonly highlights: ({
            readonly partnersConnection: ({
                readonly edges: ReadonlyArray<({
                    readonly __typename: string;
                    readonly id: string | null;
                    readonly node: ({
                        readonly categories: ReadonlyArray<({
                            readonly slug: string;
                            readonly id: string | null;
                        }) | null> | null;
                        readonly id: string | null;
                    }) | null;
                }) | null> | null;
            }) | null;
        }) | null;
        readonly biographyBlurb: ({
            readonly text: string | null;
        }) | null;
        readonly related: ({
            readonly genes: ({
                readonly edges: ReadonlyArray<({
                    readonly node: ({
                        readonly __typename: "Gene";
                        readonly id: string | null;
                        readonly slug: string;
                        readonly href: string | null;
                        readonly name: string | null;
                    }) | null;
                }) | null> | null;
            }) | null;
            readonly artistsConnection: ({
                readonly edges: ReadonlyArray<({
                    readonly node: ({
                        readonly id: string;
                    }) | null;
                }) | null> | null;
            }) | null;
        }) | null;
        readonly insights: ReadonlyArray<({
            readonly __typename: string;
            readonly type: string | null;
            readonly label: string | null;
            readonly entities: ReadonlyArray<string | null> | null;
        }) | null> | null;
        readonly artistHighlights: ({
            readonly partnersConnection: ({
                readonly edges: ReadonlyArray<({
                    readonly node: ({
                        readonly categories: ReadonlyArray<({
                            readonly slug: string;
                            readonly id: string | null;
                        }) | null> | null;
                        readonly id: string | null;
                    }) | null;
                    readonly id: string | null;
                }) | null> | null;
            }) | null;
        }) | null;
        readonly auctionResultsConnection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly price_realized: ({
                        readonly display: string | null;
                    }) | null;
                    readonly organization: string | null;
                    readonly sale_date: string | null;
                    readonly id: string | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly formattedNationalityAndBirthday: string | null;
        readonly id: string;
        readonly is_followed: boolean | null;
        readonly currentEvent: ({
            readonly event: {
                readonly __typename: string;
                readonly id: string | null;
            };
            readonly image: ({
                readonly resized: ({
                    readonly url: string;
                }) | null;
            }) | null;
            readonly name: string | null;
            readonly status: string | null;
            readonly details: string | null;
            readonly partner: string | null;
            readonly href: string | null;
        }) | null;
        readonly collections: ReadonlyArray<string | null> | null;
        readonly artworksConnection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly id: string;
                    readonly image: ({
                        readonly url: string | null;
                        readonly aspectRatio: number;
                    }) | null;
                    readonly imageTitle: string | null;
                    readonly title: string | null;
                    readonly href: string | null;
                    readonly date: string | null;
                    readonly sale_message: string | null;
                    readonly cultural_maker: string | null;
                    readonly artists: ReadonlyArray<({
                        readonly id: string;
                        readonly href: string | null;
                        readonly name: string | null;
                    }) | null> | null;
                    readonly collecting_institution: string | null;
                    readonly partner: ({
                        readonly name: string | null;
                        readonly href: string | null;
                        readonly id: string | null;
                        readonly type: string | null;
                    }) | null;
                    readonly sale: ({
                        readonly is_auction: boolean | null;
                        readonly is_closed: boolean | null;
                        readonly id: string | null;
                        readonly is_live_open: boolean | null;
                        readonly is_open: boolean | null;
                        readonly is_preview: boolean | null;
                        readonly display_timely_at: string | null;
                    }) | null;
                    readonly sale_artwork: ({
                        readonly counts: ({
                            readonly bidder_positions: number | null;
                        }) | null;
                        readonly highest_bid: ({
                            readonly display: string | null;
                        }) | null;
                        readonly opening_bid: ({
                            readonly display: string | null;
                        }) | null;
                        readonly id: string | null;
                    }) | null;
                    readonly is_inquireable: boolean | null;
                    readonly internalID: string;
                    readonly slug: string;
                    readonly is_saved: boolean | null;
                    readonly is_biddable: boolean | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly targetSupply: ({
            readonly isInMicrofunnel: boolean | null;
            readonly isTargetSupply: boolean | null;
        }) | null;
        readonly filterArtworksConnection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly internalID: string;
                    readonly slug: string;
                    readonly image: ({
                        readonly url: string | null;
                        readonly aspectRatio: number;
                    }) | null;
                    readonly imageTitle: string | null;
                    readonly title: string | null;
                    readonly href: string | null;
                    readonly date: string | null;
                    readonly sale_message: string | null;
                    readonly cultural_maker: string | null;
                    readonly artists: ReadonlyArray<({
                        readonly id: string;
                        readonly href: string | null;
                        readonly name: string | null;
                    }) | null> | null;
                    readonly collecting_institution: string | null;
                    readonly partner: ({
                        readonly name: string | null;
                        readonly href: string | null;
                        readonly id: string | null;
                        readonly type: string | null;
                    }) | null;
                    readonly sale: ({
                        readonly is_auction: boolean | null;
                        readonly is_closed: boolean | null;
                        readonly id: string | null;
                        readonly is_live_open: boolean | null;
                        readonly is_open: boolean | null;
                        readonly is_preview: boolean | null;
                        readonly display_timely_at: string | null;
                    }) | null;
                    readonly sale_artwork: ({
                        readonly counts: ({
                            readonly bidder_positions: number | null;
                        }) | null;
                        readonly highest_bid: ({
                            readonly display: string | null;
                        }) | null;
                        readonly opening_bid: ({
                            readonly display: string | null;
                        }) | null;
                        readonly id: string | null;
                    }) | null;
                    readonly is_inquireable: boolean | null;
                    readonly id: string;
                    readonly is_saved: boolean | null;
                    readonly is_biddable: boolean | null;
                }) | null;
            }) | null> | null;
            readonly id: string | null;
        }) | null;
        readonly showsConnection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly name: string | null;
                    readonly href: string | null;
                    readonly exhibitionPeriod: string | null;
                    readonly coverImage: ({
                        readonly cropped: ({
                            readonly url: string;
                            readonly width: number;
                            readonly height: number;
                        }) | null;
                    }) | null;
                    readonly id: string | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly articlesConnection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly href: string | null;
                    readonly thumbnailTitle: string | null;
                    readonly publishedAt: string | null;
                    readonly thumbnailImage: ({
                        readonly cropped: ({
                            readonly url: string;
                        }) | null;
                    }) | null;
                    readonly id: string | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly artistSeriesConnection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly internalID: string;
                    readonly title: string;
                    readonly slug: string;
                    readonly featured: boolean;
                    readonly artworksCountMessage: string | null;
                    readonly image: ({
                        readonly cropped: ({
                            readonly url: string;
                        }) | null;
                    }) | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly sidebarAggregations: ({
            readonly aggregations: ReadonlyArray<({
                readonly slice: ArtworkAggregation | null;
                readonly counts: ReadonlyArray<({
                    readonly name: string;
                    readonly value: string;
                }) | null> | null;
            }) | null> | null;
            readonly id: string | null;
        }) | null;
        readonly filtered_artworks: ({
            readonly id: string;
            readonly aggregations: ReadonlyArray<({
                readonly slice: ArtworkAggregation | null;
                readonly counts: ReadonlyArray<({
                    readonly value: string;
                    readonly name: string;
                    readonly count: number;
                }) | null> | null;
            }) | null> | null;
            readonly pageInfo: {
                readonly hasNextPage: boolean;
                readonly endCursor: string | null;
            };
            readonly pageCursors: {
                readonly around: ReadonlyArray<{
                    readonly cursor: string;
                    readonly page: number;
                    readonly isCurrent: boolean;
                }>;
                readonly first: ({
                    readonly cursor: string;
                    readonly page: number;
                    readonly isCurrent: boolean;
                }) | null;
                readonly last: ({
                    readonly cursor: string;
                    readonly page: number;
                    readonly isCurrent: boolean;
                }) | null;
                readonly previous: ({
                    readonly cursor: string;
                    readonly page: number;
                }) | null;
            };
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly id: string;
                    readonly slug: string;
                    readonly href: string | null;
                    readonly internalID: string;
                    readonly image: ({
                        readonly aspect_ratio: number;
                        readonly placeholder: string | null;
                        readonly url: string | null;
                    }) | null;
                    readonly title: string | null;
                    readonly image_title: string | null;
                    readonly date: string | null;
                    readonly sale_message: string | null;
                    readonly cultural_maker: string | null;
                    readonly artists: ReadonlyArray<({
                        readonly id: string;
                        readonly href: string | null;
                        readonly name: string | null;
                    }) | null> | null;
                    readonly collecting_institution: string | null;
                    readonly partner: ({
                        readonly name: string | null;
                        readonly href: string | null;
                        readonly id: string | null;
                        readonly type: string | null;
                    }) | null;
                    readonly sale: ({
                        readonly is_auction: boolean | null;
                        readonly is_closed: boolean | null;
                        readonly id: string | null;
                        readonly is_live_open: boolean | null;
                        readonly is_open: boolean | null;
                        readonly is_preview: boolean | null;
                        readonly display_timely_at: string | null;
                    }) | null;
                    readonly sale_artwork: ({
                        readonly counts: ({
                            readonly bidder_positions: number | null;
                        }) | null;
                        readonly highest_bid: ({
                            readonly display: string | null;
                        }) | null;
                        readonly opening_bid: ({
                            readonly display: string | null;
                        }) | null;
                        readonly id: string | null;
                    }) | null;
                    readonly is_inquireable: boolean | null;
                    readonly is_saved: boolean | null;
                    readonly is_biddable: boolean | null;
                }) | null;
                readonly id: string | null;
            }) | null> | null;
        }) | null;
    }) | null;
};
export type routes_ArtistTopLevelQuery = {
    readonly response: routes_ArtistTopLevelQueryResponse;
    readonly variables: routes_ArtistTopLevelQueryVariables;
    readonly rawResponse: routes_ArtistTopLevelQueryRawResponse;
};



/*
query routes_ArtistTopLevelQuery(
  $artistID: String!
) {
  artist(id: $artistID) @principalField {
    ...ArtistApp_artist
    slug
    statuses {
      shows
      cv(minShowCount: 0)
      articles
    }
    counts {
      forSaleArtworks
    }
    related {
      genes {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
    highlights {
      partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: ["blue-chip", "top-established", "top-emerging"]) {
        edges {
          node {
            categories {
              slug
              id
            }
            id
          }
          id
        }
      }
    }
    insights {
      type
    }
    biographyBlurb(format: HTML, partnerBio: true) {
      text
    }
    ...Overview_artist
    id
  }
}

fragment ArtistApp_artist on Artist {
  internalID
  name
  slug
  ...ArtistMeta_artist
  ...ArtistHeader_artist
  ...NavigationTabs_artist
  ...Overview_artist
  ...Works_artist
}

fragment ArtistArtworkFilter_artist_DI6Mv on Artist {
  is_followed: isFollowed
  counts {
    partner_shows: partnerShows
    for_sale_artworks: forSaleArtworks
    ecommerce_artworks: ecommerceArtworks
    auction_artworks: auctionArtworks
    artworks
    has_make_offer_artworks: hasMakeOfferArtworks
  }
  slug
  internalID
  filtered_artworks: filterArtworksConnection(medium: "*", first: 30, after: "", sort: "-partner_updated_at") {
    id
    ...ArtworkFilterArtworkGrid2_filtered_artworks
  }
}

fragment ArtistBio_bio on Artist {
  biographyBlurb(format: HTML, partnerBio: true) {
    text
  }
}

fragment ArtistConsignButton_artist on Artist {
  targetSupply {
    isInMicrofunnel
    isTargetSupply
  }
  internalID
  slug
  name
  href
  image {
    cropped(width: 66, height: 66) {
      url
    }
  }
}

fragment ArtistHeader_artist on Artist {
  artistHighlights: highlights {
    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: ["blue-chip", "top-established", "top-emerging"]) {
      edges {
        node {
          categories {
            slug
            id
          }
          id
        }
        id
      }
    }
  }
  auctionResultsConnection(recordsTrusted: true, first: 1, sort: PRICE_AND_DATE_DESC) {
    edges {
      node {
        price_realized: priceRealized {
          display(format: "0a")
        }
        organization
        sale_date: saleDate(format: "YYYY")
        id
      }
    }
  }
  internalID
  slug
  name
  formattedNationalityAndBirthday
  counts {
    follows
    forSaleArtworks
  }
  ...FollowArtistButton_artist
}

fragment ArtistMetaCanonicalLink_artist on Artist {
  slug
  statuses {
    shows
    cv(minShowCount: 0)
    articles
    auctionLots
    artworks
  }
  highlights {
    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: ["blue-chip", "top-established", "top-emerging"]) {
      edges {
        __typename
        id
      }
    }
  }
  biographyBlurb(format: HTML, partnerBio: true) {
    text
  }
  related {
    genes {
      edges {
        node {
          __typename
          id
        }
      }
    }
  }
  insights {
    __typename
  }
}

fragment ArtistMeta_artist on Artist {
  slug
  name
  nationality
  birthday
  deathday
  gender
  href
  meta {
    title
    description
  }
  alternate_names: alternateNames
  image {
    versions
    large: url(version: "large")
    square: url(version: "square")
  }
  counts {
    artworks
  }
  blurb
  artworks_connection: artworksConnection(first: 10, filter: IS_FOR_SALE, published: true) {
    edges {
      node {
        title
        date
        description
        category
        price_currency: priceCurrency
        listPrice {
          __typename
          ... on PriceRange {
            minPrice {
              major
              currencyCode
            }
            maxPrice {
              major
            }
          }
          ... on Money {
            major
            currencyCode
          }
        }
        availability
        href
        image {
          small: url(version: "small")
          large: url(version: "large")
        }
        partner {
          name
          href
          profile {
            image {
              small: url(version: "small")
              large: url(version: "large")
            }
            id
          }
          id
        }
        id
      }
    }
  }
  ...ArtistMetaCanonicalLink_artist
}

fragment ArtistSeriesItem_artistSeries on ArtistSeries {
  title
  slug
  featured
  internalID
  artworksCountMessage
  image {
    cropped(width: 320, height: 320) {
      url
    }
  }
}

fragment ArtistSeriesRail_artist on Artist {
  artistSeriesConnection(first: 50) {
    edges {
      node {
        internalID
        ...ArtistSeriesItem_artistSeries
      }
    }
  }
}

fragment ArtistTopWorksRail_artist on Artist {
  slug
  internalID
  filterArtworksConnection(sort: "-weighted_iconicity", first: 10) {
    edges {
      node {
        internalID
        slug
        ...FillwidthItem_artwork
        id
      }
    }
    id
  }
}

fragment ArtworkFilterArtworkGrid2_filtered_artworks on FilterArtworksConnection {
  id
  aggregations {
    slice
    counts {
      value
      name
      count
    }
  }
  pageInfo {
    hasNextPage
    endCursor
  }
  pageCursors {
    ...Pagination_pageCursors
  }
  edges {
    node {
      id
    }
  }
  ...ArtworkGrid_artworks
}

fragment ArtworkGrid_artworks on ArtworkConnectionInterface {
  edges {
    __typename
    node {
      id
      slug
      href
      internalID
      image {
        aspect_ratio: aspectRatio
      }
      ...GridItem_artwork
    }
    ... on Node {
      id
    }
  }
}

fragment Badge_artwork on Artwork {
  is_biddable: isBiddable
  href
  sale {
    is_preview: isPreview
    display_timely_at: displayTimelyAt
    id
  }
}

fragment Contact_artwork on Artwork {
  href
  is_inquireable: isInquireable
  sale {
    is_auction: isAuction
    is_live_open: isLiveOpen
    is_open: isOpen
    is_closed: isClosed
    id
  }
  partner(shallow: true) {
    type
    id
  }
  sale_artwork: saleArtwork {
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    counts {
      bidder_positions: bidderPositions
    }
    id
  }
}

fragment CurrentEvent_artist on Artist {
  currentEvent {
    event {
      __typename
      ... on Node {
        id
      }
    }
    image {
      resized(width: 300) {
        url
      }
    }
    name
    status
    details
    partner
    href
  }
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message: saleMessage
  cultural_maker: culturalMaker
  artists(shallow: true) {
    id
    href
    name
  }
  collecting_institution: collectingInstitution
  partner(shallow: true) {
    name
    href
    id
  }
  sale {
    is_auction: isAuction
    is_closed: isClosed
    id
  }
  sale_artwork: saleArtwork {
    counts {
      bidder_positions: bidderPositions
    }
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    id
  }
}

fragment FillwidthItem_artwork on Artwork {
  image {
    url(version: "large")
    aspectRatio
  }
  imageTitle
  title
  href
  ...Metadata_artwork
  ...Save_artwork
  ...Badge_artwork
}

fragment FollowArtistButton_artist on Artist {
  id
  internalID
  name
  slug
  is_followed: isFollowed
  counts {
    follows
  }
}

fragment Genes_artist on Artist {
  related {
    genes {
      edges {
        node {
          href
          name
          id
        }
      }
    }
  }
}

fragment GridItem_artwork on Artwork {
  internalID
  title
  image_title: imageTitle
  image {
    placeholder
    url(version: "large")
    aspect_ratio: aspectRatio
  }
  href
  ...Metadata_artwork
  ...Save_artwork
  ...Badge_artwork
}

fragment MarketInsights_artist on Artist {
  internalID
  collections
  highlights {
    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: ["blue-chip", "top-established", "top-emerging"]) {
      edges {
        node {
          categories {
            slug
            id
          }
          id
        }
        id
      }
    }
  }
  auctionResultsConnection(recordsTrusted: true, first: 1, sort: PRICE_AND_DATE_DESC) {
    edges {
      node {
        price_realized: priceRealized {
          display(format: "0a")
        }
        id
      }
    }
  }
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  href
}

fragment NavigationTabs_artist on Artist {
  slug
  statuses {
    shows
    cv(minShowCount: 0)
    articles
    auctionLots
    artworks
  }
  counts {
    forSaleArtworks
  }
  related {
    genes {
      edges {
        node {
          slug
          id
        }
      }
    }
  }
  highlights {
    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: ["blue-chip", "top-established", "top-emerging"]) {
      edges {
        node {
          categories {
            slug
            id
          }
          id
        }
        id
      }
    }
  }
  insights {
    type
  }
  biographyBlurb(format: HTML, partnerBio: true) {
    text
  }
}

fragment Overview_artist on Artist {
  ...ArtistBio_bio
  ...CurrentEvent_artist
  ...MarketInsights_artist
  ...SelectedCareerAchievements_artist
  ...Genes_artist
  ...FollowArtistButton_artist
  ...WorksForSaleRail_artist
  ...ArtistConsignButton_artist
  ...ArtistTopWorksRail_artist
  slug
  id
  statuses {
    artworks
    cv(minShowCount: 0)
  }
  counts {
    partner_shows: partnerShows
    forSaleArtworks
    ecommerce_artworks: ecommerceArtworks
    auction_artworks: auctionArtworks
    artworks
    has_make_offer_artworks: hasMakeOfferArtworks
  }
  href
  name
  biographyBlurb(format: HTML, partnerBio: true) {
    text
  }
  currentEvent {
    name
  }
  related {
    genes {
      edges {
        node {
          slug
          id
        }
      }
    }
    artistsConnection(first: 1) {
      edges {
        node {
          id
        }
      }
    }
  }
  showsConnection(first: 5, sort: END_AT_ASC, status: "running") {
    edges {
      node {
        name
        href
        exhibitionPeriod
        coverImage {
          cropped(width: 220, height: 140) {
            url
            width
            height
          }
        }
        id
      }
    }
  }
  articlesConnection(first: 4, sort: PUBLISHED_AT_DESC, inEditorialFeed: true) {
    edges {
      node {
        href
        thumbnailTitle
        publishedAt(format: "MMM Do, YYYY")
        thumbnailImage {
          cropped(width: 120, height: 80) {
            url
          }
        }
        id
      }
    }
  }
  internalID
  collections
  highlights {
    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: ["blue-chip", "top-established", "top-emerging"]) {
      edges {
        node {
          categories {
            slug
            id
          }
          id
        }
        id
      }
    }
  }
  insights {
    type
  }
}

fragment Pagination_pageCursors on PageCursors {
  around {
    cursor
    page
    isCurrent
  }
  first {
    cursor
    page
    isCurrent
  }
  last {
    cursor
    page
    isCurrent
  }
  previous {
    cursor
    page
  }
}

fragment Save_artwork on Artwork {
  id
  internalID
  slug
  is_saved: isSaved
  title
}

fragment SelectedCareerAchievements_artist on Artist {
  highlights {
    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: ["blue-chip", "top-established", "top-emerging"]) {
      edges {
        node {
          categories {
            slug
            id
          }
          id
        }
        id
      }
    }
  }
  insights {
    type
    label
    entities
  }
  auctionResultsConnection(recordsTrusted: true, first: 1, sort: PRICE_AND_DATE_DESC) {
    edges {
      node {
        price_realized: priceRealized {
          display(format: "0a")
        }
        organization
        sale_date: saleDate(format: "YYYY")
        id
      }
    }
  }
}

fragment WorksForSaleRail_artist on Artist {
  artworksConnection(first: 20, sort: AVAILABILITY_ASC) {
    edges {
      node {
        id
        ...FillwidthItem_artwork
      }
    }
  }
  ...FollowArtistButton_artist
}

fragment Works_artist on Artist {
  internalID
  slug
  ...ArtistTopWorksRail_artist
  artistSeriesConnection(first: 50) {
    edges {
      node {
        internalID
      }
    }
  }
  ...ArtistSeriesRail_artist
  related {
    artistsConnection(first: 1) {
      edges {
        node {
          id
        }
      }
    }
  }
  sidebarAggregations: filterArtworksConnection(sort: "-partner_updated_at", first: 30, after: "") {
    aggregations {
      slice
      counts {
        name
        value
      }
    }
    id
  }
  ...ArtistArtworkFilter_artist_DI6Mv
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "String!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shows",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "minShowCount",
      "value": 0
    }
  ],
  "kind": "ScalarField",
  "name": "cv",
  "storageKey": "cv(minShowCount:0)"
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "articles",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "forSaleArtworks",
  "storageKey": null
},
v7 = [
  (v2/*: any*/)
],
v8 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v9 = [
  {
    "kind": "Literal",
    "name": "displayOnPartnerProfile",
    "value": true
  },
  (v8/*: any*/),
  {
    "kind": "Literal",
    "name": "partnerCategory",
    "value": [
      "blue-chip",
      "top-established",
      "top-emerging"
    ]
  },
  {
    "kind": "Literal",
    "name": "representedBy",
    "value": true
  }
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "format",
      "value": "HTML"
    },
    {
      "kind": "Literal",
      "name": "partnerBio",
      "value": true
    }
  ],
  "concreteType": "ArtistBlurb",
  "kind": "LinkedField",
  "name": "biographyBlurb",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    }
  ],
  "storageKey": "biographyBlurb(format:\"HTML\",partnerBio:true)"
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v17 = [
  {
    "kind": "Literal",
    "name": "version",
    "value": "large"
  }
],
v18 = {
  "alias": "large",
  "args": (v17/*: any*/),
  "kind": "ScalarField",
  "name": "url",
  "storageKey": "url(version:\"large\")"
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v20 = [
  (v19/*: any*/)
],
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artworks",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "major",
  "storageKey": null
},
v25 = [
  (v24/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "currencyCode",
    "storageKey": null
  }
],
v26 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    {
      "alias": "small",
      "args": [
        {
          "kind": "Literal",
          "name": "version",
          "value": "small"
        }
      ],
      "kind": "ScalarField",
      "name": "url",
      "storageKey": "url(version:\"small\")"
    },
    (v18/*: any*/)
  ],
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "node",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PartnerCategory",
      "kind": "LinkedField",
      "name": "categories",
      "plural": true,
      "selections": [
        (v2/*: any*/),
        (v27/*: any*/)
      ],
      "storageKey": null
    },
    (v27/*: any*/)
  ],
  "storageKey": null
},
v29 = {
  "kind": "Literal",
  "name": "first",
  "value": 1
},
v30 = {
  "alias": null,
  "args": (v17/*: any*/),
  "kind": "ScalarField",
  "name": "url",
  "storageKey": "url(version:\"large\")"
},
v31 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    (v30/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "aspectRatio",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageTitle",
  "storageKey": null
},
v33 = {
  "alias": "sale_message",
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
},
v34 = {
  "alias": "cultural_maker",
  "args": null,
  "kind": "ScalarField",
  "name": "culturalMaker",
  "storageKey": null
},
v35 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v36 = {
  "alias": null,
  "args": (v35/*: any*/),
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "artists",
  "plural": true,
  "selections": [
    (v27/*: any*/),
    (v14/*: any*/),
    (v13/*: any*/)
  ],
  "storageKey": "artists(shallow:true)"
},
v37 = {
  "alias": "collecting_institution",
  "args": null,
  "kind": "ScalarField",
  "name": "collectingInstitution",
  "storageKey": null
},
v38 = {
  "alias": null,
  "args": (v35/*: any*/),
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": [
    (v13/*: any*/),
    (v14/*: any*/),
    (v27/*: any*/),
    (v10/*: any*/)
  ],
  "storageKey": "partner(shallow:true)"
},
v39 = {
  "alias": null,
  "args": null,
  "concreteType": "Sale",
  "kind": "LinkedField",
  "name": "sale",
  "plural": false,
  "selections": [
    {
      "alias": "is_auction",
      "args": null,
      "kind": "ScalarField",
      "name": "isAuction",
      "storageKey": null
    },
    {
      "alias": "is_closed",
      "args": null,
      "kind": "ScalarField",
      "name": "isClosed",
      "storageKey": null
    },
    (v27/*: any*/),
    {
      "alias": "is_live_open",
      "args": null,
      "kind": "ScalarField",
      "name": "isLiveOpen",
      "storageKey": null
    },
    {
      "alias": "is_open",
      "args": null,
      "kind": "ScalarField",
      "name": "isOpen",
      "storageKey": null
    },
    {
      "alias": "is_preview",
      "args": null,
      "kind": "ScalarField",
      "name": "isPreview",
      "storageKey": null
    },
    {
      "alias": "display_timely_at",
      "args": null,
      "kind": "ScalarField",
      "name": "displayTimelyAt",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v40 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
],
v41 = {
  "alias": "sale_artwork",
  "args": null,
  "concreteType": "SaleArtwork",
  "kind": "LinkedField",
  "name": "saleArtwork",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SaleArtworkCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": "bidder_positions",
          "args": null,
          "kind": "ScalarField",
          "name": "bidderPositions",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "highest_bid",
      "args": null,
      "concreteType": "SaleArtworkHighestBid",
      "kind": "LinkedField",
      "name": "highestBid",
      "plural": false,
      "selections": (v40/*: any*/),
      "storageKey": null
    },
    {
      "alias": "opening_bid",
      "args": null,
      "concreteType": "SaleArtworkOpeningBid",
      "kind": "LinkedField",
      "name": "openingBid",
      "plural": false,
      "selections": (v40/*: any*/),
      "storageKey": null
    },
    (v27/*: any*/)
  ],
  "storageKey": null
},
v42 = {
  "alias": "is_inquireable",
  "args": null,
  "kind": "ScalarField",
  "name": "isInquireable",
  "storageKey": null
},
v43 = {
  "alias": "is_saved",
  "args": null,
  "kind": "ScalarField",
  "name": "isSaved",
  "storageKey": null
},
v44 = {
  "alias": "is_biddable",
  "args": null,
  "kind": "ScalarField",
  "name": "isBiddable",
  "storageKey": null
},
v45 = {
  "kind": "Literal",
  "name": "after",
  "value": ""
},
v46 = {
  "kind": "Literal",
  "name": "first",
  "value": 30
},
v47 = {
  "kind": "Literal",
  "name": "sort",
  "value": "-partner_updated_at"
},
v48 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slice",
  "storageKey": null
},
v49 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v50 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v51 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "page",
  "storageKey": null
},
v52 = [
  (v50/*: any*/),
  (v51/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "isCurrent",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "routes_ArtistTopLevelQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistStatuses",
            "kind": "LinkedField",
            "name": "statuses",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistCounts",
            "kind": "LinkedField",
            "name": "counts",
            "plural": false,
            "selections": [
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistRelatedData",
            "kind": "LinkedField",
            "name": "related",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "GeneConnection",
                "kind": "LinkedField",
                "name": "genes",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GeneEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Gene",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": (v7/*: any*/),
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
            "concreteType": "ArtistHighlights",
            "kind": "LinkedField",
            "name": "highlights",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "PartnerArtistConnection",
                "kind": "LinkedField",
                "name": "partnersConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PartnerArtistEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Partner",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PartnerCategory",
                            "kind": "LinkedField",
                            "name": "categories",
                            "plural": true,
                            "selections": (v7/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "partnersConnection(displayOnPartnerProfile:true,first:10,partnerCategory:[\"blue-chip\",\"top-established\",\"top-emerging\"],representedBy:true)"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistInsight",
            "kind": "LinkedField",
            "name": "insights",
            "plural": true,
            "selections": [
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistApp_artist"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Overview_artist"
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
    "name": "routes_ArtistTopLevelQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v12/*: any*/),
          (v13/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nationality",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "birthday",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "deathday",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gender",
            "storageKey": null
          },
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistMeta",
            "kind": "LinkedField",
            "name": "meta",
            "plural": false,
            "selections": [
              (v15/*: any*/),
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "alternate_names",
            "args": null,
            "kind": "ScalarField",
            "name": "alternateNames",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "versions",
                "storageKey": null
              },
              (v18/*: any*/),
              {
                "alias": "square",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "square"
                  }
                ],
                "kind": "ScalarField",
                "name": "url",
                "storageKey": "url(version:\"square\")"
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "height",
                    "value": 66
                  },
                  {
                    "kind": "Literal",
                    "name": "width",
                    "value": 66
                  }
                ],
                "concreteType": "CroppedImageUrl",
                "kind": "LinkedField",
                "name": "cropped",
                "plural": false,
                "selections": (v20/*: any*/),
                "storageKey": "cropped(height:66,width:66)"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistCounts",
            "kind": "LinkedField",
            "name": "counts",
            "plural": false,
            "selections": [
              (v21/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "follows",
                "storageKey": null
              },
              (v6/*: any*/),
              {
                "alias": "partner_shows",
                "args": null,
                "kind": "ScalarField",
                "name": "partnerShows",
                "storageKey": null
              },
              {
                "alias": "ecommerce_artworks",
                "args": null,
                "kind": "ScalarField",
                "name": "ecommerceArtworks",
                "storageKey": null
              },
              {
                "alias": "auction_artworks",
                "args": null,
                "kind": "ScalarField",
                "name": "auctionArtworks",
                "storageKey": null
              },
              {
                "alias": "has_make_offer_artworks",
                "args": null,
                "kind": "ScalarField",
                "name": "hasMakeOfferArtworks",
                "storageKey": null
              },
              {
                "alias": "for_sale_artworks",
                "args": null,
                "kind": "ScalarField",
                "name": "forSaleArtworks",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "blurb",
            "storageKey": null
          },
          {
            "alias": "artworks_connection",
            "args": [
              {
                "kind": "Literal",
                "name": "filter",
                "value": "IS_FOR_SALE"
              },
              (v8/*: any*/),
              {
                "kind": "Literal",
                "name": "published",
                "value": true
              }
            ],
            "concreteType": "ArtworkConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtworkEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v15/*: any*/),
                      (v22/*: any*/),
                      (v16/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "category",
                        "storageKey": null
                      },
                      {
                        "alias": "price_currency",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "priceCurrency",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "listPrice",
                        "plural": false,
                        "selections": [
                          (v23/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Money",
                                "kind": "LinkedField",
                                "name": "minPrice",
                                "plural": false,
                                "selections": (v25/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Money",
                                "kind": "LinkedField",
                                "name": "maxPrice",
                                "plural": false,
                                "selections": [
                                  (v24/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "PriceRange"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v25/*: any*/),
                            "type": "Money"
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "availability",
                        "storageKey": null
                      },
                      (v14/*: any*/),
                      (v26/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Partner",
                        "kind": "LinkedField",
                        "name": "partner",
                        "plural": false,
                        "selections": [
                          (v13/*: any*/),
                          (v14/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Profile",
                            "kind": "LinkedField",
                            "name": "profile",
                            "plural": false,
                            "selections": [
                              (v26/*: any*/),
                              (v27/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v27/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v27/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artworksConnection(filter:\"IS_FOR_SALE\",first:10,published:true)"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistStatuses",
            "kind": "LinkedField",
            "name": "statuses",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "auctionLots",
                "storageKey": null
              },
              (v21/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistHighlights",
            "kind": "LinkedField",
            "name": "highlights",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "PartnerArtistConnection",
                "kind": "LinkedField",
                "name": "partnersConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PartnerArtistEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v23/*: any*/),
                      (v27/*: any*/),
                      (v28/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "partnersConnection(displayOnPartnerProfile:true,first:10,partnerCategory:[\"blue-chip\",\"top-established\",\"top-emerging\"],representedBy:true)"
              }
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistRelatedData",
            "kind": "LinkedField",
            "name": "related",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "GeneConnection",
                "kind": "LinkedField",
                "name": "genes",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "GeneEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Gene",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v23/*: any*/),
                          (v27/*: any*/),
                          (v2/*: any*/),
                          (v14/*: any*/),
                          (v13/*: any*/)
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
                "args": [
                  (v29/*: any*/)
                ],
                "concreteType": "ArtistConnection",
                "kind": "LinkedField",
                "name": "artistsConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArtistEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v27/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "artistsConnection(first:1)"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistInsight",
            "kind": "LinkedField",
            "name": "insights",
            "plural": true,
            "selections": [
              (v23/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "label",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "entities",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "artistHighlights",
            "args": null,
            "concreteType": "ArtistHighlights",
            "kind": "LinkedField",
            "name": "highlights",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "PartnerArtistConnection",
                "kind": "LinkedField",
                "name": "partnersConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PartnerArtistEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v28/*: any*/),
                      (v27/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "partnersConnection(displayOnPartnerProfile:true,first:10,partnerCategory:[\"blue-chip\",\"top-established\",\"top-emerging\"],representedBy:true)"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              (v29/*: any*/),
              {
                "kind": "Literal",
                "name": "recordsTrusted",
                "value": true
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "PRICE_AND_DATE_DESC"
              }
            ],
            "concreteType": "AuctionResultConnection",
            "kind": "LinkedField",
            "name": "auctionResultsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AuctionResultEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AuctionResult",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": "price_realized",
                        "args": null,
                        "concreteType": "AuctionResultPriceRealized",
                        "kind": "LinkedField",
                        "name": "priceRealized",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "format",
                                "value": "0a"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "display",
                            "storageKey": "display(format:\"0a\")"
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "organization",
                        "storageKey": null
                      },
                      {
                        "alias": "sale_date",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "format",
                            "value": "YYYY"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "saleDate",
                        "storageKey": "saleDate(format:\"YYYY\")"
                      },
                      (v27/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "auctionResultsConnection(first:1,recordsTrusted:true,sort:\"PRICE_AND_DATE_DESC\")"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "formattedNationalityAndBirthday",
            "storageKey": null
          },
          (v27/*: any*/),
          {
            "alias": "is_followed",
            "args": null,
            "kind": "ScalarField",
            "name": "isFollowed",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CurrentEvent",
            "kind": "LinkedField",
            "name": "currentEvent",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "event",
                "plural": false,
                "selections": [
                  (v23/*: any*/),
                  (v27/*: any*/)
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
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "width",
                        "value": 300
                      }
                    ],
                    "concreteType": "ResizedImageUrl",
                    "kind": "LinkedField",
                    "name": "resized",
                    "plural": false,
                    "selections": (v20/*: any*/),
                    "storageKey": "resized(width:300)"
                  }
                ],
                "storageKey": null
              },
              (v13/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "status",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "details",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "partner",
                "storageKey": null
              },
              (v14/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "collections",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 20
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "AVAILABILITY_ASC"
              }
            ],
            "concreteType": "ArtworkConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtworkEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v27/*: any*/),
                      (v31/*: any*/),
                      (v32/*: any*/),
                      (v15/*: any*/),
                      (v14/*: any*/),
                      (v22/*: any*/),
                      (v33/*: any*/),
                      (v34/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v38/*: any*/),
                      (v39/*: any*/),
                      (v41/*: any*/),
                      (v42/*: any*/),
                      (v12/*: any*/),
                      (v2/*: any*/),
                      (v43/*: any*/),
                      (v44/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artworksConnection(first:20,sort:\"AVAILABILITY_ASC\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtistTargetSupply",
            "kind": "LinkedField",
            "name": "targetSupply",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isInMicrofunnel",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isTargetSupply",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              (v8/*: any*/),
              {
                "kind": "Literal",
                "name": "sort",
                "value": "-weighted_iconicity"
              }
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterArtworksEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/),
                      (v2/*: any*/),
                      (v31/*: any*/),
                      (v32/*: any*/),
                      (v15/*: any*/),
                      (v14/*: any*/),
                      (v22/*: any*/),
                      (v33/*: any*/),
                      (v34/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v38/*: any*/),
                      (v39/*: any*/),
                      (v41/*: any*/),
                      (v42/*: any*/),
                      (v27/*: any*/),
                      (v43/*: any*/),
                      (v44/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v27/*: any*/)
            ],
            "storageKey": "filterArtworksConnection(first:10,sort:\"-weighted_iconicity\")"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 5
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "END_AT_ASC"
              },
              {
                "kind": "Literal",
                "name": "status",
                "value": "running"
              }
            ],
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ShowEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Show",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v13/*: any*/),
                      (v14/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "exhibitionPeriod",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "coverImage",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "height",
                                "value": 140
                              },
                              {
                                "kind": "Literal",
                                "name": "width",
                                "value": 220
                              }
                            ],
                            "concreteType": "CroppedImageUrl",
                            "kind": "LinkedField",
                            "name": "cropped",
                            "plural": false,
                            "selections": [
                              (v19/*: any*/),
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
                            "storageKey": "cropped(height:140,width:220)"
                          }
                        ],
                        "storageKey": null
                      },
                      (v27/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "showsConnection(first:5,sort:\"END_AT_ASC\",status:\"running\")"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 4
              },
              {
                "kind": "Literal",
                "name": "inEditorialFeed",
                "value": true
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "PUBLISHED_AT_DESC"
              }
            ],
            "concreteType": "ArticleConnection",
            "kind": "LinkedField",
            "name": "articlesConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArticleEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Article",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v14/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "thumbnailTitle",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "format",
                            "value": "MMM Do, YYYY"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "publishedAt",
                        "storageKey": "publishedAt(format:\"MMM Do, YYYY\")"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "thumbnailImage",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "height",
                                "value": 80
                              },
                              {
                                "kind": "Literal",
                                "name": "width",
                                "value": 120
                              }
                            ],
                            "concreteType": "CroppedImageUrl",
                            "kind": "LinkedField",
                            "name": "cropped",
                            "plural": false,
                            "selections": (v20/*: any*/),
                            "storageKey": "cropped(height:80,width:120)"
                          }
                        ],
                        "storageKey": null
                      },
                      (v27/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "articlesConnection(first:4,inEditorialFeed:true,sort:\"PUBLISHED_AT_DESC\")"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 50
              }
            ],
            "concreteType": "ArtistSeriesConnection",
            "kind": "LinkedField",
            "name": "artistSeriesConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtistSeriesEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArtistSeries",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/),
                      (v15/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "featured",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "artworksCountMessage",
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
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "height",
                                "value": 320
                              },
                              {
                                "kind": "Literal",
                                "name": "width",
                                "value": 320
                              }
                            ],
                            "concreteType": "CroppedImageUrl",
                            "kind": "LinkedField",
                            "name": "cropped",
                            "plural": false,
                            "selections": (v20/*: any*/),
                            "storageKey": "cropped(height:320,width:320)"
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
            "storageKey": "artistSeriesConnection(first:50)"
          },
          {
            "alias": "sidebarAggregations",
            "args": [
              (v45/*: any*/),
              (v46/*: any*/),
              (v47/*: any*/)
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtworksAggregationResults",
                "kind": "LinkedField",
                "name": "aggregations",
                "plural": true,
                "selections": [
                  (v48/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AggregationCount",
                    "kind": "LinkedField",
                    "name": "counts",
                    "plural": true,
                    "selections": [
                      (v13/*: any*/),
                      (v49/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v27/*: any*/)
            ],
            "storageKey": "filterArtworksConnection(after:\"\",first:30,sort:\"-partner_updated_at\")"
          },
          {
            "alias": "filtered_artworks",
            "args": [
              (v45/*: any*/),
              (v46/*: any*/),
              {
                "kind": "Literal",
                "name": "medium",
                "value": "*"
              },
              (v47/*: any*/)
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
            "plural": false,
            "selections": [
              (v27/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtworksAggregationResults",
                "kind": "LinkedField",
                "name": "aggregations",
                "plural": true,
                "selections": [
                  (v48/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AggregationCount",
                    "kind": "LinkedField",
                    "name": "counts",
                    "plural": true,
                    "selections": [
                      (v49/*: any*/),
                      (v13/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "count",
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
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageCursors",
                "kind": "LinkedField",
                "name": "pageCursors",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "kind": "LinkedField",
                    "name": "around",
                    "plural": true,
                    "selections": (v52/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "kind": "LinkedField",
                    "name": "first",
                    "plural": false,
                    "selections": (v52/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "kind": "LinkedField",
                    "name": "last",
                    "plural": false,
                    "selections": (v52/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageCursor",
                    "kind": "LinkedField",
                    "name": "previous",
                    "plural": false,
                    "selections": [
                      (v50/*: any*/),
                      (v51/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterArtworksEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v27/*: any*/),
                      (v2/*: any*/),
                      (v14/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "image",
                        "plural": false,
                        "selections": [
                          {
                            "alias": "aspect_ratio",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "aspectRatio",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "placeholder",
                            "storageKey": null
                          },
                          (v30/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v15/*: any*/),
                      {
                        "alias": "image_title",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "imageTitle",
                        "storageKey": null
                      },
                      (v22/*: any*/),
                      (v33/*: any*/),
                      (v34/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v38/*: any*/),
                      (v39/*: any*/),
                      (v41/*: any*/),
                      (v42/*: any*/),
                      (v43/*: any*/),
                      (v44/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v27/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "filterArtworksConnection(after:\"\",first:30,medium:\"*\",sort:\"-partner_updated_at\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "routes_ArtistTopLevelQuery",
    "operationKind": "query",
    "text": "query routes_ArtistTopLevelQuery(\n  $artistID: String!\n) {\n  artist(id: $artistID) @principalField {\n    ...ArtistApp_artist\n    slug\n    statuses {\n      shows\n      cv(minShowCount: 0)\n      articles\n    }\n    counts {\n      forSaleArtworks\n    }\n    related {\n      genes {\n        edges {\n          node {\n            slug\n            id\n          }\n        }\n      }\n    }\n    highlights {\n      partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: [\"blue-chip\", \"top-established\", \"top-emerging\"]) {\n        edges {\n          node {\n            categories {\n              slug\n              id\n            }\n            id\n          }\n          id\n        }\n      }\n    }\n    insights {\n      type\n    }\n    biographyBlurb(format: HTML, partnerBio: true) {\n      text\n    }\n    ...Overview_artist\n    id\n  }\n}\n\nfragment ArtistApp_artist on Artist {\n  internalID\n  name\n  slug\n  ...ArtistMeta_artist\n  ...ArtistHeader_artist\n  ...NavigationTabs_artist\n  ...Overview_artist\n  ...Works_artist\n}\n\nfragment ArtistArtworkFilter_artist_DI6Mv on Artist {\n  is_followed: isFollowed\n  counts {\n    partner_shows: partnerShows\n    for_sale_artworks: forSaleArtworks\n    ecommerce_artworks: ecommerceArtworks\n    auction_artworks: auctionArtworks\n    artworks\n    has_make_offer_artworks: hasMakeOfferArtworks\n  }\n  slug\n  internalID\n  filtered_artworks: filterArtworksConnection(medium: \"*\", first: 30, after: \"\", sort: \"-partner_updated_at\") {\n    id\n    ...ArtworkFilterArtworkGrid2_filtered_artworks\n  }\n}\n\nfragment ArtistBio_bio on Artist {\n  biographyBlurb(format: HTML, partnerBio: true) {\n    text\n  }\n}\n\nfragment ArtistConsignButton_artist on Artist {\n  targetSupply {\n    isInMicrofunnel\n    isTargetSupply\n  }\n  internalID\n  slug\n  name\n  href\n  image {\n    cropped(width: 66, height: 66) {\n      url\n    }\n  }\n}\n\nfragment ArtistHeader_artist on Artist {\n  artistHighlights: highlights {\n    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: [\"blue-chip\", \"top-established\", \"top-emerging\"]) {\n      edges {\n        node {\n          categories {\n            slug\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  auctionResultsConnection(recordsTrusted: true, first: 1, sort: PRICE_AND_DATE_DESC) {\n    edges {\n      node {\n        price_realized: priceRealized {\n          display(format: \"0a\")\n        }\n        organization\n        sale_date: saleDate(format: \"YYYY\")\n        id\n      }\n    }\n  }\n  internalID\n  slug\n  name\n  formattedNationalityAndBirthday\n  counts {\n    follows\n    forSaleArtworks\n  }\n  ...FollowArtistButton_artist\n}\n\nfragment ArtistMetaCanonicalLink_artist on Artist {\n  slug\n  statuses {\n    shows\n    cv(minShowCount: 0)\n    articles\n    auctionLots\n    artworks\n  }\n  highlights {\n    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: [\"blue-chip\", \"top-established\", \"top-emerging\"]) {\n      edges {\n        __typename\n        id\n      }\n    }\n  }\n  biographyBlurb(format: HTML, partnerBio: true) {\n    text\n  }\n  related {\n    genes {\n      edges {\n        node {\n          __typename\n          id\n        }\n      }\n    }\n  }\n  insights {\n    __typename\n  }\n}\n\nfragment ArtistMeta_artist on Artist {\n  slug\n  name\n  nationality\n  birthday\n  deathday\n  gender\n  href\n  meta {\n    title\n    description\n  }\n  alternate_names: alternateNames\n  image {\n    versions\n    large: url(version: \"large\")\n    square: url(version: \"square\")\n  }\n  counts {\n    artworks\n  }\n  blurb\n  artworks_connection: artworksConnection(first: 10, filter: IS_FOR_SALE, published: true) {\n    edges {\n      node {\n        title\n        date\n        description\n        category\n        price_currency: priceCurrency\n        listPrice {\n          __typename\n          ... on PriceRange {\n            minPrice {\n              major\n              currencyCode\n            }\n            maxPrice {\n              major\n            }\n          }\n          ... on Money {\n            major\n            currencyCode\n          }\n        }\n        availability\n        href\n        image {\n          small: url(version: \"small\")\n          large: url(version: \"large\")\n        }\n        partner {\n          name\n          href\n          profile {\n            image {\n              small: url(version: \"small\")\n              large: url(version: \"large\")\n            }\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  ...ArtistMetaCanonicalLink_artist\n}\n\nfragment ArtistSeriesItem_artistSeries on ArtistSeries {\n  title\n  slug\n  featured\n  internalID\n  artworksCountMessage\n  image {\n    cropped(width: 320, height: 320) {\n      url\n    }\n  }\n}\n\nfragment ArtistSeriesRail_artist on Artist {\n  artistSeriesConnection(first: 50) {\n    edges {\n      node {\n        internalID\n        ...ArtistSeriesItem_artistSeries\n      }\n    }\n  }\n}\n\nfragment ArtistTopWorksRail_artist on Artist {\n  slug\n  internalID\n  filterArtworksConnection(sort: \"-weighted_iconicity\", first: 10) {\n    edges {\n      node {\n        internalID\n        slug\n        ...FillwidthItem_artwork\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment ArtworkFilterArtworkGrid2_filtered_artworks on FilterArtworksConnection {\n  id\n  aggregations {\n    slice\n    counts {\n      value\n      name\n      count\n    }\n  }\n  pageInfo {\n    hasNextPage\n    endCursor\n  }\n  pageCursors {\n    ...Pagination_pageCursors\n  }\n  edges {\n    node {\n      id\n    }\n  }\n  ...ArtworkGrid_artworks\n}\n\nfragment ArtworkGrid_artworks on ArtworkConnectionInterface {\n  edges {\n    __typename\n    node {\n      id\n      slug\n      href\n      internalID\n      image {\n        aspect_ratio: aspectRatio\n      }\n      ...GridItem_artwork\n    }\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable: isBiddable\n  href\n  sale {\n    is_preview: isPreview\n    display_timely_at: displayTimelyAt\n    id\n  }\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment CurrentEvent_artist on Artist {\n  currentEvent {\n    event {\n      __typename\n      ... on Node {\n        id\n      }\n    }\n    image {\n      resized(width: 300) {\n        url\n      }\n    }\n    name\n    status\n    details\n    partner\n    href\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment FillwidthItem_artwork on Artwork {\n  image {\n    url(version: \"large\")\n    aspectRatio\n  }\n  imageTitle\n  title\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n}\n\nfragment FollowArtistButton_artist on Artist {\n  id\n  internalID\n  name\n  slug\n  is_followed: isFollowed\n  counts {\n    follows\n  }\n}\n\nfragment Genes_artist on Artist {\n  related {\n    genes {\n      edges {\n        node {\n          href\n          name\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment GridItem_artwork on Artwork {\n  internalID\n  title\n  image_title: imageTitle\n  image {\n    placeholder\n    url(version: \"large\")\n    aspect_ratio: aspectRatio\n  }\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n}\n\nfragment MarketInsights_artist on Artist {\n  internalID\n  collections\n  highlights {\n    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: [\"blue-chip\", \"top-established\", \"top-emerging\"]) {\n      edges {\n        node {\n          categories {\n            slug\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  auctionResultsConnection(recordsTrusted: true, first: 1, sort: PRICE_AND_DATE_DESC) {\n    edges {\n      node {\n        price_realized: priceRealized {\n          display(format: \"0a\")\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n\nfragment NavigationTabs_artist on Artist {\n  slug\n  statuses {\n    shows\n    cv(minShowCount: 0)\n    articles\n    auctionLots\n    artworks\n  }\n  counts {\n    forSaleArtworks\n  }\n  related {\n    genes {\n      edges {\n        node {\n          slug\n          id\n        }\n      }\n    }\n  }\n  highlights {\n    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: [\"blue-chip\", \"top-established\", \"top-emerging\"]) {\n      edges {\n        node {\n          categories {\n            slug\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  insights {\n    type\n  }\n  biographyBlurb(format: HTML, partnerBio: true) {\n    text\n  }\n}\n\nfragment Overview_artist on Artist {\n  ...ArtistBio_bio\n  ...CurrentEvent_artist\n  ...MarketInsights_artist\n  ...SelectedCareerAchievements_artist\n  ...Genes_artist\n  ...FollowArtistButton_artist\n  ...WorksForSaleRail_artist\n  ...ArtistConsignButton_artist\n  ...ArtistTopWorksRail_artist\n  slug\n  id\n  statuses {\n    artworks\n    cv(minShowCount: 0)\n  }\n  counts {\n    partner_shows: partnerShows\n    forSaleArtworks\n    ecommerce_artworks: ecommerceArtworks\n    auction_artworks: auctionArtworks\n    artworks\n    has_make_offer_artworks: hasMakeOfferArtworks\n  }\n  href\n  name\n  biographyBlurb(format: HTML, partnerBio: true) {\n    text\n  }\n  currentEvent {\n    name\n  }\n  related {\n    genes {\n      edges {\n        node {\n          slug\n          id\n        }\n      }\n    }\n    artistsConnection(first: 1) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n  showsConnection(first: 5, sort: END_AT_ASC, status: \"running\") {\n    edges {\n      node {\n        name\n        href\n        exhibitionPeriod\n        coverImage {\n          cropped(width: 220, height: 140) {\n            url\n            width\n            height\n          }\n        }\n        id\n      }\n    }\n  }\n  articlesConnection(first: 4, sort: PUBLISHED_AT_DESC, inEditorialFeed: true) {\n    edges {\n      node {\n        href\n        thumbnailTitle\n        publishedAt(format: \"MMM Do, YYYY\")\n        thumbnailImage {\n          cropped(width: 120, height: 80) {\n            url\n          }\n        }\n        id\n      }\n    }\n  }\n  internalID\n  collections\n  highlights {\n    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: [\"blue-chip\", \"top-established\", \"top-emerging\"]) {\n      edges {\n        node {\n          categories {\n            slug\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  insights {\n    type\n  }\n}\n\nfragment Pagination_pageCursors on PageCursors {\n  around {\n    cursor\n    page\n    isCurrent\n  }\n  first {\n    cursor\n    page\n    isCurrent\n  }\n  last {\n    cursor\n    page\n    isCurrent\n  }\n  previous {\n    cursor\n    page\n  }\n}\n\nfragment Save_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n\nfragment SelectedCareerAchievements_artist on Artist {\n  highlights {\n    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: [\"blue-chip\", \"top-established\", \"top-emerging\"]) {\n      edges {\n        node {\n          categories {\n            slug\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  insights {\n    type\n    label\n    entities\n  }\n  auctionResultsConnection(recordsTrusted: true, first: 1, sort: PRICE_AND_DATE_DESC) {\n    edges {\n      node {\n        price_realized: priceRealized {\n          display(format: \"0a\")\n        }\n        organization\n        sale_date: saleDate(format: \"YYYY\")\n        id\n      }\n    }\n  }\n}\n\nfragment WorksForSaleRail_artist on Artist {\n  artworksConnection(first: 20, sort: AVAILABILITY_ASC) {\n    edges {\n      node {\n        id\n        ...FillwidthItem_artwork\n      }\n    }\n  }\n  ...FollowArtistButton_artist\n}\n\nfragment Works_artist on Artist {\n  internalID\n  slug\n  ...ArtistTopWorksRail_artist\n  artistSeriesConnection(first: 50) {\n    edges {\n      node {\n        internalID\n      }\n    }\n  }\n  ...ArtistSeriesRail_artist\n  related {\n    artistsConnection(first: 1) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n  sidebarAggregations: filterArtworksConnection(sort: \"-partner_updated_at\", first: 30, after: \"\") {\n    aggregations {\n      slice\n      counts {\n        name\n        value\n      }\n    }\n    id\n  }\n  ...ArtistArtworkFilter_artist_DI6Mv\n}\n"
  }
};
})();
(node as any).hash = '5edb28246849efbf2c02e6e012495d70';
export default node;
