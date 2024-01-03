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

includeMenu();
includeFooter();