

// main variables
let contactEl = ""
let menuCheckEl = ""


// setTimout to load it after everything else
setTimeout(function() {
    contactEl = document.getElementById("contact-el")
    menuCheckEl = document.getElementById("menu-check")
}, 100)


document.addEventListener("click", function(e){
    if (e.target.tagName=="A") {
        menuCheckEl.checked = false
    }

    openAndCloseContact(e.target)
    
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


function openAndCloseContact(eTarget) {
    if (eTarget.className.split(" ")[0]=="contact-me-btn") {
        contactEl.style.display = "flex"
        document.body.style.overflow = "hidden"
    } else if (eTarget.id=="exit-btn" || eTarget.id=="contact-el") {
        contactEl.style.display = "none"
        document.body.style.overflow = "scroll"
    }
}