
// let flag = true
// setTimeout(function() {
//     if (flag == true) {
//         location.reload()
//     }
// }, 200)

// flag = false

// main variables
let contactEl = ""
let menuCheckEl = ""

// TODO: sometimes it gives an error in netlify servers.

// setTimout to load it after everything else
setTimeout(function() {
    contactEl = document.getElementById("contact-el")
    menuCheckEl = document.getElementById("menu-check")
}, 500)


document.addEventListener("click", function(e){
    if (e.target.tagName=="A") {
        menuCheckEl.checked = false
    }

    if (e.target.className.split(" ")[0]=="contact-me-btn") {
        contactEl.style.display = "flex"
        document.body.style.overflow = "hidden"
    } else if (e.target.id=="exit-btn" || e.target.id=="contact-el") {
        contactEl.style.display = "none"
        document.body.style.overflow = "scroll"
    }
    
    if (e.target.id=="menu-check") {
        clickScaleEffect(document.getElementById("menu-bars"))
        openMobileMenuScrollLock(e.target.id)
    }
})


function clickScaleEffect(elem) {
    elem.style.transform = "scale(1.1)"
    setTimeout(function() {
        elem.style.transform = "scale(1)"
    }, 100)
}


function openMobileMenuScrollLock() {
    if (menuCheckEl.checked) {
        document.body.style.overflow = "hidden"
    } else if (menuCheckEl.checked==false) {
        document.body.style.overflow = "scroll"
    }
}
