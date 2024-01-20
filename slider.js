document.addEventListener("click", function(e) {

    const sliderBtn = e.target.className        
    if (sliderBtn == "next-btn" || sliderBtn == "fa-solid fa-chevron-right") {
        showSlides(slideIndex += 1)
    } else if (sliderBtn == "prev-btn" || sliderBtn == "fa-solid fa-chevron-left") {
        showSlides(slideIndex += -1)
    } else if (sliderBtn == "line one") {
        showSlides(slideIndex = 1)
    } else if (sliderBtn == "line two") {
        showSlides(slideIndex = 2)
    } else if (sliderBtn == "line three") {
        showSlides(slideIndex = 3)
    }

})
    
let slideIndex = 0
let wasBtnClicked = false
let sliderTimeout;

function showSlides(index=slideIndex += 1, btnClicked=true) {
    // btnClicked => autoSlider is sending false, when user clicks it defaults to true
    if (btnClicked) {
        clearTimeout(sliderTimeout)
        startSliderAfterClick()
    }

    wasBtnClicked = btnClicked

    const slides = document.getElementsByClassName("slides")
    const lines = document.getElementsByClassName("line")
    let i
    
    if (index > 3) {
        slideIndex = 1
    } else if (index < 1) {
        slideIndex = 3
    }

    for (i = 0; i < 3; i++) {
        slides[i].style.display = "none"
        lines[i].className = lines[i].className.replace(" active", "")
    }

    slides[slideIndex - 1].style.display = "block"
    lines[slideIndex - 1].className += " active"
}


function autoSlider() {
    sliderTimeout = window.setTimeout(() => {
        showSlides(slideIndex += 1, false)
        autoSlider()
    }, 2500)
}

function startSliderAfterClick() {
    autoSlider()
}

showSlides()

if (!wasBtnClicked) {
    autoSlider()
}
