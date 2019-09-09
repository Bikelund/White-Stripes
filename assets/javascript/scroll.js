let navBar = document.getElementsByClassName("main-nav");
let windowWidth = window.innerWidth;
let bodyWidth = document.body.offsetWidth;

bodyWidth = bodyWidth - windowWidth;
windowWidth = (windowWidth / 10) * 4;

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (window.pageXOffset < windowWidth || window.pageXOffset == bodyWidth) {
    navBar[0].style.transition = "all 1s";
    navBar[0].style.left = "-8vw";
    navBar[0].style.opacity = "0";
  } else {
    navBar[0].style.left = "0";
    navBar[0].style.opacity = "1";
    navBar[0].style.zIndex = "1000";
  }
}