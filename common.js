
// this function includes the menu into other files
function includeMenu() {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("menu-container").innerHTML = this.responseText
    }
  }
  xhttp.open("GET", "menu.html", true)
  xhttp.send()
}

// this function includes the footer into other files
function includeFooter() {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("footer-container").innerHTML = this.responseText
    }
  }
  xhttp.open("GET", "footer.html", true)
  xhttp.send()
}


includeMenu()

// footer loads later. For future optimization reasons.
setTimeout(function() {
  includeFooter()
}, 500)