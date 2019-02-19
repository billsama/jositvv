new Clappr.Player({
  source: "http://pression-iptv.xyz:25461/live/LUCHO/1UCdF27JArp73RS/39.m3u8",
  mediacontrol: {seekbar: "#3b5998", buttons: "##3b5998"},  
  poster: 'http://robertoromanortiz.com/wp-content/uploads/2015/11/feliznavidad.jpg',
  watermark: "http://www.mediafire.com/convkey/1c29/k9js628iruasgc6zg.jpg", position: 'top-right',
  mute: false,
  autoPlay: true,
  parent: '#player-container',
  width: '100%',
  height: '100%',
  hlsjsConfig: {
    // here any hls.js configuration options
  }
})