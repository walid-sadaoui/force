Backbone = require 'backbone'
sd = require('sharify').data
noUiSlider = require 'nouislider'

module.exports = class VeniceVideoView extends Backbone.View

  events:
    'click #toggleplay': 'onTogglePlay'
    'click #togglemute': 'onToggleMute'
    'click .venice-video__close': 'onCloseVideo'
    'click .venice-video__controls-overlay': 'fadeInControls'

  initialize: (options) ->
    @video = options.video
    @slug = options.slug
    @isMobile = options.isMobile
    @$playButton = $('#toggleplay')
    @$muteButton = $('#togglemute')
    @$time = $('.venice-video__time')
    @$controls = $('#controls, .venice-video__close, .venice-video__vr-icon, .venice-info-icon')
    @$controlsOverlay = $('.venice-video__controls-overlay')
    @setupVideo()
    @on 'swapVideo', @swapVideo
    @scrubbing = false

  setupVideo: ->
    @vrView = new VRView.Player '#vrvideo',
      video: @video,
      is_stereo: false,
      is_vr_off: false,
      width: '100%',
      height: '100%',
      loop: false
    @vrView.on 'ready', @onVRViewReady
    @vrView.on 'timeupdate', @updateTime
    @vrView.on 'error', @onVRViewError

  updateTime: (e) =>
    return if @scrubbing
    if e.currentTime > 3
      @trackThreeSeconds()
    if e.currentTime > 10
      @trackTenSeconds()
    if e.currentTime > @quarterDuration
      @trackQuarter()
    if e.currentTime > @halfDuration
      @trackHalf()
    if e.currentTime > @threeQuarterDuration
      @trackThreeQuarter()
    if e.currentTime is @fullDuration
      @trigger 'videoCompleted'
      @trackFull()
    @scrubber.set(e.currentTime)
    @$time.text @formatTime e.currentTime if e.currentTime

  onVRViewReady: =>
    @duration = @vrView.getDuration()
    @scrubber = noUiSlider.create $('.venice-video__scrubber')[0],
      start: 0
      behaviour: 'snap'
      range:
        min: 0
        max: @duration
    @scrubber.on 'start', =>
      @scrubbing = true
    @scrubber.on 'change', (value) =>
      @vrView.setCurrentTime parseFloat(value[0])
      @scrubbing = false
    $('.noUi-handle').append '<div class="venice-video__time">00:00</div>'
    @$time = $('.venice-video__time')
    @trigger 'videoReady'

  onVRViewError: (options) =>
    @trigger 'videoError', options.message

  onTogglePlay: ->
    if @vrView.isPaused
      @vrView.play()
    else
      @vrView.pause()
    @$playButton.toggleClass 'paused'

  fadeOutControls: =>
    return unless @isMobile
    setTimeout =>
      @$controls.fadeOut()
      @$controlsOverlay.fadeIn()
    , 3000

  fadeInControls: =>
    @$controls.fadeIn()
    @$controlsOverlay.fadeOut()
    @fadeOutControls()

  onToggleMute: ->
    if @$muteButton.attr('data-state') is 'muted'
      @vrView.setVolume 1
      @$muteButton.attr 'data-state', 'unmuted'
    else
      @vrView.setVolume 0
      @$muteButton.attr 'data-state', 'muted'

  swapVideo: (options) =>
    $('.venice-video__scrubber')[0].noUiSlider?.destroy()
    @vrView.iframe.src = @createIframeSrc options.video
    @slug = options.slug

  createIframeSrc: (video) ->
    "#{sd.APP_URL}/vanity/vrview/index.html?video=" +
    video +
    "&is_stereo=false&is_vr_off=false&loop=false"

  onCloseVideo: ->
    @trigger 'closeVideo'

  formatTime: (time) ->
    minutes = Math.floor(time / 60) % 60
    seconds = Math.floor(time % 60)
    minutes = if minutes <= 0 then 0 else minutes
    seconds = if seconds <= 0 then 0 else seconds

    result = (if minutes < 10 then '0' + minutes else minutes) + ':'
    result += if seconds < 10 then '0' + seconds else seconds
