/* 

    Random quote for intro screen

*/
let introText = document.getElementById("intro-text");

let quotes = [
'You took a white orchid',
'You do as you\'re told',
'Fell in love with a girl',
'I\'m gonna work the straw',
'On the edge of a burning light',
'Life is so boring',
'Hardest button to button',
'One little midnight kiss',
'Rag & Bone!',
'Oh, I think I smell a rat',
'I\'m gonna catch hell' ];

introText.innerHTML = quotes[randomNumb()];

function randomNumb() {
    return Math.floor(Math.random() * 11);
}