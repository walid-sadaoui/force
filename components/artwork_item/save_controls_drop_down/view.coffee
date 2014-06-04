Backbone = require 'backbone'
mediator = require '../../../lib/mediator.coffee'
CurrentUser = require '../../../models/current_user.coffee'
{ track } = require '../../../lib/analytics.coffee'
{ ArtworkCollection } = ArtworkCollections = require '../../../collections/artwork_collections.coffee'

module.exports = class SaveControls extends Backbone.View

  initialize: (options) ->
    @user = CurrentUser.orNull()
    return unless @user
    @collections = new ArtworkCollections [], user: @user
    @collections.on 'add', @renderCollections

  renderCollections: =>
    @$('.save-controls-drop-down-menu-item:not(.save-controls-drop-down-new)').remove()
    @$('.save-controls-drop-down-menu nav').prepend @collections.map((collection) ->
      """
      <div class='save-controls-drop-down-menu-item' \
           style='#{if collection.get('id') is 'saved-artwork' then 'display: none' else ''}'>
        #{collection.get('name')}
        <span class='icon-check'></span>
        <span class='icon-close'></span>
        <span class='save-controls-removed'>removed</span>
      </div>
      """
    ).join ''

  closeOnClickOff: (e) =>
    return if $(e.target).closest('.save-controls-drop-down-menu').length
    @$el.attr 'data-state', 'saved-close'
    $(document).off 'click.save-controls-' + @cid

  addToCollection: (col) ->
    col.saveArtwork @model.get('id')
    @$('.save-controls-drop-down-menu-item').removeClass 'is-active'
    @$(".save-controls-drop-down-menu-item:eq(#{@collections.indexOf col})").addClass 'is-active'

  showSignupModal: ->
    track.funnel 'Triggered sign up form via save button'
    mediator.trigger 'open:auth',
      mode: 'register'
      copy: 'Sign up to save artworks'
      destination: "#{@model.href()}/save"
    false

  rollup: =>
    @$el.attr 'data-state', 'saved-close'
    clearTimeout @rollupTimeout

  events:
    'click .overlay-button-save': 'openCollectionModal'
    'click .save-controls-drop-down-menu-item:not(.save-controls-drop-down-new):not(.is-active)': 'onAddToCollection'
    'click .save-controls-drop-down-menu-item.is-active': 'onRemoveFromCollection'
    'click form button': 'newCollection'
    'click .save-controls-drop-down-new input': (e) -> e.preventDefault()
    'click': (e) -> e.preventDefault()
    'focus .save-controls-drop-down-new input': -> clearTimeout @rollupTimeout
    'mouseover .icon-plus-small': -> @$('.save-controls-drop-down-new').addClass 'is-hover'
    'mouseout .icon-plus-small': -> @$('.save-controls-drop-down-new').removeClass 'is-hover'

  openCollectionModal: ->
    return @showSignupModal() unless @user
    @$el.attr 'data-state', 'saving'
    @collections.fetch success: =>
      @$el.attr 'data-state', 'saved'
      @addToCollection @collections.get('saved-artwork')
      $(document).on 'click', @closeOnClickOff
      $(window).one 'scroll', @rollup
      @rollupTimeout = setTimeout @rollup, 6000

  onAddToCollection: (e) ->
    e.preventDefault()
    @addToCollection @collections.at $(e.currentTarget).index()
    $(e.currentTarget).addClass('is-init-click')
    $(e.currentTarget).one 'mouseout', -> $(e.currentTarget).removeClass('is-init-click')
    setTimeout @rollup, 300
    false

  onRemoveFromCollection: (e) ->
    col = @collections.at $(e.currentTarget).index()
    col.removeArtwork @model.get 'id'
    $(e.currentTarget).removeClass 'is-active'
    $removed = $(e.currentTarget).find('.save-controls-removed')
    $removed.show()
    setTimeout (-> $removed.fadeOut 'fast'), 1000

  newCollection: (e) ->
    collection = new ArtworkCollection
      name: @$('.save-controls-drop-down-new input').val()
      user_id: @user.get('id')
    @$('.save-controls-drop-down-new').addClass 'is-loading'
    collection.save null, complete: =>
      @collections.add collection
      @$('.save-controls-drop-down-new').removeClass 'is-loading'
      @addToCollection collection
    @$('form input').val ''
    false