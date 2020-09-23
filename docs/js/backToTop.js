const backToTopButton = document.querySelector("#back-to-top-btn")

window.addEventListener("scroll", scrollFunction)

function scrollFunction() {
    if (window.pageYOffset > 300) { //Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrace")) {
            backToTopButton.classList.remove("btnExit")
            backToTopButton.classList.add("btnEntrace")
            backToTopButton.style.display = "block"
        }
        
    }
    else { //Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrace")) {
            backToTopButton.classList.remove("btnEntrace")
            backToTopButton.classList.add("btnExit")
            setTimeout (function() {
                backToTopButton.style.display = "none"
            }, 250)
        }
    }
}

// Aqui se crea metodos para hacer el smooth-behavior: smooth, ya que en css no soporta todos los navegadores, si quiero usar el css, descomento la function backtotop y le pongo esa funcion al hacer evento click, osea en donde dice smoothScrollBackToTop
backToTopButton.addEventListener("click", smoothScrollBackToTop)

// function backToTop() {
//     window.scrollTo(0, 0)
// }

function smoothScrollBackToTop (){
    const targetPosition = 0;
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 50
    let start = null

    window.requestAnimationFrame(step)

    function step (timestamp) {
        if (!start) start = timestamp
        const progress = timestamp - start
        window.scrollTo (0, easeInOutCubic (progress, startPosition, distance, duration))
        if (progress < duration) window.requestAnimationFrame(step)
    }
}

function easeInOutCubic (t, b, c, d) {
    t /= d/2
    if (t < 1) return c/2*t*t*t + b
    t -= 2
    return c/2*(t*t*t + 2) + b
}