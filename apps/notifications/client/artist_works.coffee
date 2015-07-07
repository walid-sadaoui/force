_ = require 'underscore'
Backbone = require 'backbone'
Artist = require '../../../models/artist.coffee'
ArtworkColumnsView = require '../../../components/artwork_columns/view.coffee'
emptyTemplate = -> require('../templates/empty.jade') arguments...
artistHeaderTemplate = -> require('../templates/artist_header.jade') arguments...

module.exports = class ArtistWorksView extends Backbone.View

  initialize: ({@filterState}) ->
    @$filternav = @$('#notifications-filter')
    @$artistHeader = @$('.notifications-artist-sub-header')
    @$artistFeed = @$('#notifications-artist-feed')
    @$artistSpinner = @$('#notifications-artist-feed-spinner')
    @$artistworks = @$('#notifications-artist-works')

    @filterState.on 'change', @fetchAndRender

  fetchAndRender: (id) =>
    return unless @filterState.get 'artist'

    @artist = new Artist id: @filterState.get 'artist'
    @forSaleArtist = if @filterState.get('forSale') then 'for_sale' else ''
    @artist.related().artworks.fetchUntilEnd
      data:
        filter: [@forSaleArtist]
      success: =>
        @filterState.set 'loading', false
        if @artist.related().artworks.length
          @renderColumns @$artistFeed, @artist.related().artworks
          @$artistHeader.html artistHeaderTemplate
            name: @$(".filter-artist[data-artist=#{@filterState.get('artist')}]").children('.filter-artist-name').html()
            count: @artist.related().artworks.length
            id: @artist.id
        else
          @$artistFeed.html emptyTemplate()

  renderColumns: ($el, artworks) ->
    new ArtworkColumnsView
      el: $el
      collection: artworks
      artworkSize: 'large'
      numberOfColumns: 3
      gutterWidth: 40
      allowDuplicates: true
      maxArtworkHeight: 600