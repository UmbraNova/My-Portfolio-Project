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
        case "line one":
            currentSlide(1)
            break
        case "line two":
            currentSlide(2)
            break
        case "line three":
            currentSlide(3)
            break
        default:
            break
        }
})
    
    let slideIndex = 1
    
function showSlides(index=slideIndex += 1) {
    const slides = document.getElementsByClassName("slides")
    const lines = document.getElementsByClassName("line")
    let i
    
    if (index > slides.length) {
        slideIndex = 1
    } else if (index < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < lines.length; i++) {
        lines[i].className = lines[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block"
    lines[slideIndex - 1].className += " active"
}

function changeSlide(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}
    
function autoSlide() {
    changeSlide(2)
    setTimeout(autoSlide, 8000)
}

showSlides()
// autoSlide()

