/* function parallax() {
    let quote = document.querySelectorAll(".quote");
    let multiplier = 0.3;
    
    quote.forEach(function(quote) {
      if (isElementInViewport(quote)) {
        let distanceX = window.pageXOffset;
        quote.style.transform = "translateX(-" + multiplier * distanceX + "px)";
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
  
  function elementDistanceFromBottomOfViewport(el) {
    let rect = el.getBoundingClientRect();
  
    return window.innerHeight - rect.top;
  } */