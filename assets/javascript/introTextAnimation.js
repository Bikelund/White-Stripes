/* 
    Fades in and out the intro text
*/
  anime.timeline({})
  .add({
      targets: '#intro-text',
      opacity: [0,1],
      duration: 2500,
      easing: 'easeInOutCubic',
  }).add({
      targets: '.intro',
      translateY: -1000,
      opacity: [1,0],
      duration: 1000,
      easing: 'easeInOutCubic',
  })