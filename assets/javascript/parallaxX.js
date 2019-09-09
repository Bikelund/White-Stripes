/* 
    Makes parallax scroll effect on texts
*/

function parallax() {
  let vertical = document.querySelectorAll(".title-vertical");
  let horizontal = document.querySelectorAll(".static");
  let sevenNationArmy = document.querySelectorAll(".seven-text");
  let quotes = document.querySelectorAll('.quote');
  let smallImg = document.querySelectorAll('.small-img');
  /* let multiplier = 0.1; */
  
    vertical.forEach(function(vertical) {
      if (isElementInViewport(vertical)) {
        /* var rect = vertical.getBoundingClientRect() */
        let distanceX = window.pageXOffset;
        vertical.style.transform = "translateX(" + 0.1 * distanceX + "px)";
      }
    });
    horizontal.forEach(function(horizontal) {
      if (isElementInViewport(horizontal)) {
        let distanceX = window.pageXOffset;
        /* console.log(distanceX); */
        horizontal.style.transform = "translateY(-" + 0.1 * distanceX + "px)";
      }
    });
    sevenNationArmy.forEach(function(seven) {
      if (isElementInViewport(seven)) {
        let distanceX = elementDistanceFromLeftOfViewport(seven);
        seven.style.transform = "translateX(" + 0.3 * distanceX + "px)";
      }
    });
    quotes.forEach(function(quote) {
      if (isElementInViewport(quote)) {
        let distanceX2 = window.pageXOffset;
        quote.style.transform = "translateX(" + 0.4 * distanceX2 + "px)";
        quotes[1].style.transform = "translateX(" + 0.3 * distanceX2 + "px)";
        quotes[2].style.transform = "translateX(" + 0.2 * distanceX2 + "px)";
        quotes[3].style.transform = "translateX(" + 0.1 * distanceX2 + "px)";
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
  
  /* function elementDistanceFromBottomOfViewport(el) {
    let rect = el.getBoundingClientRect();
  
    return window.innerHeight - rect.top;
  } */

  function elementDistanceFromLeftOfViewport(el) {
    let rect = el.getBoundingClientRect();
  
    return window.innerWidth - rect.left;
  }