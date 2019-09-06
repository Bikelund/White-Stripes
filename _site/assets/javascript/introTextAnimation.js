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
    background: 'rgba(0, 0, 0, 0)',
    duration: 1000,
    easing: 'easeInCubic',
}).add({
    targets: '.intro',
    translateY: -1000,
    duration: 500,
    easing: 'easeInOutCubic',
});

/* 
    Fades in the index quote
*/
anime.timeline({})
.add({
targets: '.quote',
translateY: ["1.2em", 0],
translateZ: 0,
easing: "easeInOutExpo",
duration: 5000,
delay: (el, i) => 200 * i
});