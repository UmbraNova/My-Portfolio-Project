

// variables
let contactEl = ""
let menuCheckEl = ""


// setTimout to load it after everything else
setTimeout(function() {
    contactEl = document.getElementById("contact-el")
    menuCheckEl = document.getElementById("menu-check")
}, 10)


document.addEventListener("click", function(e){
    if (e.target.tagName=="A") {
        menuCheckEl.checked = false
    }

    if (e.target.id=="contact-me-btn") {
        contactEl.style.display = "flex"
        document.body.style.overflow = "hidden"
    } else if (e.target.id=="exit-btn") {
        contactEl.style.display = "none"
        document.body.style.overflow = "scroll"
    }

    if (e.target.id=="menu-check") {
        openMobileMenuScrollLock(e.target.id)
    }
})


function openMobileMenuScrollLock() {
    if (menuCheckEl.checked) {
        document.body.style.overflow = "hidden"
    } else if (menuCheckEl.checked==false) {
        document.body.style.overflow = "scroll"
    }
}