const bioText = document.querySelectorAll(".biography-bottom");
const titleJack = document.querySelectorAll(".biography-top .letters");
const titleMeg = document.querySelectorAll(".biography-top .letters2");

let biographyJackAnimationHasPlayed = false;
let biographyMegAnimationHasPlayed = false;
function bioAnimation() {
    bioText.forEach(function(text) {
      if (isElementInViewport(text)) {
        text.classList.add("bioTextFadeOut");
      } else {
        text.classList.remove("bioTextFadeOut");
      }
    });

    titleJack.forEach(function(jack) {
      if (isElementInViewport(jack) && !biographyJackAnimationHasPlayed) {
        biographyJackAnimationHasPlayed = true;
        jack.innerHTML = jack.textContent.replace(
          /\S/g,
          "<span class='biography-letter'>$&</span>"
        );
  
        anime({
          targets: ".biography-top .biography-letter",
          rotateY: [-90, 0],
          rotateX: [-90, 0],
          duration: 2300,
          delay: (el, i) => 245 * i
        });
      }
    });

    titleMeg.forEach(function(meg) {
      if (isElementInViewport(meg) && !biographyMegAnimationHasPlayed) {
        biographyMegAnimationHasPlayed = true;
        meg.innerHTML = meg.textContent.replace(
          /\S/g,
          "<span class='biography-letter2'>$&</span>"
        );
  
        anime({
          targets: ".biography-top .biography-letter2",
          rotateY: [-90, 0],
          rotateX: [-90, 0],
          duration: 2300,
          delay: (el, i) => 245 * i
        });
      }
    });
  }


function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return rect.left + rect.width / 2 < window.innerWidth;
}
  
  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", bioAnimation, false);
    addEventListener("load", bioAnimation, false);
    addEventListener("scroll", bioAnimation, false);
  }


  