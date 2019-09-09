// txt animation
function aboutAnim() {
    const allTxt = document.querySelectorAll('.txt-anim')
    allTxt.forEach(txt => {
        if (isElementInViewport(txt)) {
            txt.classList.add('is-visible')
        } else {
            txt.classList.remove('is-visible')
        }
    })
}

// window.addEventListener('scroll', aboutAnim)
if (window.addEventListener) {
    addEventListener('DOMContentLoaded', aboutAnim, false);
    addEventListener('load', aboutAnim, false);
    addEventListener('scroll', aboutAnim, false);
}

// small image parallax effect
const aboutImg = document.querySelector('figure')

function parallaxAboutImg() {
    const multiplier = 0.2

    if (isElementInViewport(aboutImg)) {
        var distance = distanceFromLeft(aboutImg)
        aboutImg.style.transform = `translateX(${distance*multiplier}px)`
    }
}

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', parallaxAboutImg, false);
    addEventListener('load', parallaxAboutImg, false);
    addEventListener('scroll', parallaxAboutImg, false);
}

function distanceFromLeft(el) {
    const rect = el.getBoundingClientRect()
    return window.innerWidth - rect.left
    // console.log(window.innerWidth - rect.left);
}