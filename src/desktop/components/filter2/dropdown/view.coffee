Backbone = require 'backbone'

template = -> require('./template.jade') arguments...

module.exports = class DropdownView extends Backbone.View

  events:
    'click a[data-attr]': 'onSelect'

  initialize: ({@collection, @params, @facet, @el, @facets, @filterRoot}) ->
    @listenTo @collection, 'initial:fetch', @renderCounts
    @listenTo @params, "change:#{@facet}", @renderActiveParam
    @listenTo @collection, 'sync', @renderCounts

  renderCounts: =>
    counts = @collection.counts[@facet]
    activeText = counts[@params.get(@facet)]?.name

    html = template
      filter: counts
      name: @facet
      filterRoot:  @filterRoot
      params: @params
      activeText: activeText

    old = @$el
    @setElement html
    old.replaceWith @$el
    @delegateEvents()

  onSelect: (e) ->
    if (val = $(e.currentTarget).data 'val') is ''
      @params.unset @facet
    else
      @params.set @facet, val

    window.analytics.track("Activated artworks filter", {
      filter: @facet,
      value: val,
    })
    false
