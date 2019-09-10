/* 
    Makes parallax scroll effect on texts
*/
let vertical = document.querySelectorAll(".title-vertical");
let horizontal = document.querySelectorAll(".static");
let sevenNationArmy = document.querySelectorAll(".seven-text");
let waters = document.querySelectorAll('.quote');
let smallImg = document.querySelectorAll('.small-img');
let multiplier = [0.1, 0.2, 0.3, 0.4];

function parallax() {
    
    vertical.forEach(function(vertical) {
      if (isElementInViewport(vertical)) {
        let distanceX = window.pageXOffset;
        vertical.style.transform = "translateX(" + multiplier[2] * distanceX + "px)";
      }
    });
    horizontal.forEach(function(horizontal) {
      if (isElementInViewport(horizontal)) {
        let distanceX = window.pageXOffset;
        /* console.log(distanceX); */
        horizontal.style.transform = "translateX(-" + multiplier[1] * distanceX + "px)";
      }
    });
    sevenNationArmy.forEach(function(seven) {
      if (isElementInViewport(seven)) {
        let distanceX = elementDistanceFromLeftOfViewport(seven);
        seven.style.transform = "translateX(" + multiplier[2] * distanceX + "px)";
      }
    });
    waters.forEach(function(water) {
      if (isElementInViewport(water)) {
        let distanceX2 = window.pageXOffset;
        water.style.transform     = "translateX(" + multiplier[3] * distanceX2 + "px)";
        waters[1].style.transform = "translateX(" + multiplier[2] * distanceX2 + "px)";
        waters[2].style.transform = "translateX(" + multiplier[1] * distanceX2 + "px)";
        waters[3].style.transform = "translateX(" + multiplier[0] * distanceX2 + "px)";
      }
    });
    smallImg.forEach(function(img) {
      if (isElementInViewport(img)) {
        let distanceX = elementDistanceFromLeftOfViewport(img);
        img.style.backgroundPositionX = "-" + 0.15 * distanceX + "px";
      }
    });
  }
  
  function isElementInViewport (el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', parallax, false); 
    addEventListener('load', parallax, false);
    addEventListener('scroll', parallax, false);
  }

  function elementDistanceFromLeftOfViewport(el) {
    let rect = el.getBoundingClientRect();
  
    return window.innerWidth - rect.left;
  }