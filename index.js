
$(function() {
  $('.spritespin').spritespin({
    source: SpriteSpin.sourceArray('/images/rad_zoom_{frame}.jpg', { frame: [1,34], digits: 3 }),
    width: 480,
    height: 327,
    sense: -1,
    animate: false,
    plugins: [
      '360',
      'drag'
    ]
  });
})
