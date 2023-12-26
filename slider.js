document.addEventListener("click", function(e) {
    switch (e.target.className) {
        case "next-btn":
            changeSlide(1)
            break
        case "fa-solid fa-chevron-right":
            changeSlide(1)
            break
        case "prev-btn":
            changeSlide(-1)
            break
        case "fa-solid fa-chevron-left":
            changeSlide(-1)
            break
        case "dot":
            currentSlide()
            break
        default:
            break
        }
})
    
    let slideIndex = 1
    
function showSlides(index=slideIndex += 1) {
    const slides = document.getElementsByClassName("slides")
    const dots = document.getElementsByClassName("line")
    
    if (index > slides.length) {
        slideIndex = 1
    } else if (index < 1) {
        slideIndex = slides.length
    }

    let i

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"
}

function changeSlide(n) {
    showSlides(slideIndex += n)
}

function currentSlide() {
    showSlides(slideIndex = 1)
}
    
function autoSlide() {
    changeSlide(2)
    setTimeout(autoSlide, 8000)
}

showSlides()
// autoSlide()

