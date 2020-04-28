window.onload = () => {
    'use strict';
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('./sw.js');
    }
} // loads service worker script and gets it started

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} */