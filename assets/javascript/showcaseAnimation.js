
const texts = document.querySelectorAll(".animation-text");
const images = document.querySelectorAll(".animation-img");
const title = document.querySelectorAll(".showcase-horizontal");

let showcaseTitleAnimationHasPlayed = false;

function fadeOutAnimation() {
  texts.forEach(function(text) {
    if (isElementInViewport(text)) {
      text.classList.add("fadeOutText");
    } else {
      text.classList.remove("fadeOutText");
    }
  });

  images.forEach(function(img) {
    if (isElementInViewport(img)) {
      img.classList.add("fadeInImg");
    } else {
      img.classList.remove("fadeInImg");
    }
  });

  title.forEach(function(title) {
    if (isElementInViewport(title) && !showcaseTitleAnimationHasPlayed) {
      showcaseTitleAnimationHasPlayed = true
      title.innerHTML = title.textContent.replace(
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

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return rect.left + rect.width / 2 < window.innerWidth;
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", fadeOutAnimation, false);
  addEventListener("load", fadeOutAnimation, false);
  addEventListener("scroll", fadeOutAnimation, false);
}
