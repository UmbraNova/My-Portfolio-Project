

document.body.style.overflow = "hidden"

let contactEl = ""
// setTimout to load it after everything else
setTimeout(function() {
    contactEl = document.getElementById("contact-el")
}, 10)


document.addEventListener("click", function(e){
    if (e.target.tagName=="A") {
        document.getElementById("menu-check").checked = false
    } else if (e.target.id=="exit-btn") {
        contactEl.style.display = "none"
    }

    if (e.target.id=="contact-me-btn") {
        contactEl.style.display = "flex"
    }
  })