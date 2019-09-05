function fadeInImg() {
  var images = document.querySelectorAll(".animation-img");
  images.forEach(function(img) {
    if (isElementInViewport(img)) {
      img.classList.add("fadeInImg");
    } else {
      img.classList.remove("fadeInImg");
    }
  });
}

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return rect.left + rect.width / 2 < window.innerWidth;
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", fadeInImg, false);
  addEventListener("load", fadeInImg, false);
  addEventListener("scroll", fadeInImg, false);
}

var showcaseTitleAnimationHasPlayed = false;
/* Showcase tittle Animation */
function showcaseTitleAnimation() {
  let text = document.querySelectorAll(".showcase-horizontal");
  text.forEach(function(text) {
    if (isElementInViewport(text) && !showcaseTitleAnimationHasPlayed) {
      showcaseTitleAnimationHasPlayed = true
      text.innerHTML = text.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime({
        targets: ".showcase-horizontal .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 3200,
        delay: (el, i) => 400 + 300 * i
      });
    }
  });
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", showcaseTitleAnimation, false);
  addEventListener("load", showcaseTitleAnimation, false);
  addEventListener("scroll", showcaseTitleAnimation, false);
}

/* Text animation */
function fadeOutTextAnimation() {
  var texts = document.querySelectorAll(".animation-text");
  texts.forEach(function(text) {
    if (isElementInViewport(text)) {
      text.classList.add("fadeOutText");
    } else {
      text.classList.remove("fadeOutText");
    }
  });
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", fadeOutTextAnimation, false);
  addEventListener("load", fadeOutTextAnimation, false);
  addEventListener("scroll", fadeOutTextAnimation, false);
}
