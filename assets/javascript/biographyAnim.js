var biographyTitleAnimationHasPlayed = false;
/* Showcase tittle Animation */
function biographyTitleAnimation() {
  var biography = document.querySelectorAll(".biography-top .letters");
  biography.forEach(function(text) {
    if (isElementInViewport(text) && !biographyTitleAnimationHasPlayed) {
      biographyTitleAnimationHasPlayed = true;
      text.innerHTML = text.textContent.replace(
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
}

var biographyTitle2AnimationHasPlayed = false;
/* Showcase tittle Animation */
function biographyTitle2Animation() {
  var biography2 = document.querySelectorAll(".biography-top .letters2");
  biography2.forEach(function(text) {
    if (isElementInViewport(text) && !biographyTitle2AnimationHasPlayed) {
      biographyTitle2AnimationHasPlayed = true;
      text.innerHTML = text.textContent.replace(
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
  addEventListener("DOMContentLoaded", biographyTitleAnimation, false);
  addEventListener("load", biographyTitleAnimation, false);
  addEventListener("scroll", biographyTitleAnimation, false);
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", biographyTitle2Animation, false);
  addEventListener("load", biographyTitle2Animation, false);
  addEventListener("scroll", biographyTitle2Animation, false);
}
/* Biography text animation */
function bioTxtAnimation() {
    var bioText = document.querySelectorAll(".biography-bottom");
    bioText.forEach(function(text) {
      if (isElementInViewport(text)) {
        text.classList.add("bioTextFadeOut");
      } else {
        text.classList.remove("bioTextFadeOut");
      }
    });
  }
  
  if (window.addEventListener) {
    addEventListener("DOMContentLoaded", bioTxtAnimation, false);
    addEventListener("load", bioTxtAnimation, false);
    addEventListener("scroll", bioTxtAnimation, false);
  }
  