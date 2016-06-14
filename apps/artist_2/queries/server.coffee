module.exports = """
  query artist($artist_id: String!, $includeBlurb: Boolean!) {
    artist(id: $artist_id){
      _id
      id
      href
      name
      gender
      alternate_names
      nationality
      birthday
      deathday
      years
      location
      hometown
      is_consignable
      biography_blurb @include(if: $includeBlurb) {
        text
        credit
      }
      counts {
        follows
        artworks
        partner_shows
      }
      meta {
        title
        description
      }
      ... current
      ... image
      ... statuses
      ... carousel
    }
  }

  fragment image on Artist {
    image {
      versions
      large: url(version:"large")
    }
  }

  fragment statuses on Artist{
    statuses {
      artworks
      shows
      artists
      contemporary
      articles
      biography
      cv
      auction_lots
    }
  }

  #{require '../components/carousel/query'}
  #{require '../components/current_show_auction/query'}
"""
