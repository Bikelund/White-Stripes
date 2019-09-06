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

window.addEventListener('scroll', aboutAnim)