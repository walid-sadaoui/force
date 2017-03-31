export default function SaleQuery(id) {
  return `{
    sale(id: "${id}") {
      _id
      associated_sale {
        ${require('../../../components/auction_block/query.js').default}
      }
      auction_state
      cover_image {
        cropped(width: 1800 height: 600 version: "wide") {
          url
        }
      }
      currency
      description
      end_at
      id
      is_live_open
      is_open
      live_start_at
      name
      start_at
      status
      symbol
    }
  }`
}
