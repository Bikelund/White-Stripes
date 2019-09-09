// bg animation
const tl = anime.timeline({
    easing: 'easeInOutExpo',
    duration: 750,
    direction: 'alternate',
    loop: true
})

tl.add({
  targets: '.bg .column',
  width: '60%',
  backgroundColor: 'rgba(255, 0, 0, .15)',
  delay: anime.stagger(120)
})
.add({
  targets: '.bg .column',
  backgroundColor: 'rgba(255, 0, 0, .75)',
  delay: anime.stagger(100)
})
.add({
  targets: '.bg .column',
  scale: 1.2,
  rotate: '-15deg',
  duration: 5000
})

// svg animation
const path = anime.path('svg path')

anime({
  targets: 'svg path',
  strokeDashoffset: [anime.setDashoffset, 0],
  fill: '#fff',
  easing: 'easeInOutExpo',
  duration: 2500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
})