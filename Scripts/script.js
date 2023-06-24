// Sticky NavBar
window.onscroll = function () {
  myFunction();
};
let navbar = document.querySelector("#navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Theme Change
let theme = localStorage.getItem("theme");
let themeDots = document.querySelectorAll(".theme-dot");

// Setting Default Theme
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

// Looping through the theme options
for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

// Setting the theme
function setTheme(mode) {
  // Light Theme
  if (mode == "light") {
    document.querySelector("#theme-style").href = "Styles/light.css";
  }
  // Blue Theme
  if (mode == "blue") {
    document.querySelector("#theme-style").href = "Styles/blue.css";
  }
  // Green Theme
  if (mode == "green") {
    document.querySelector("#theme-style").href = "Styles/green.css";
  }
  // Purple Theme
  if (mode == "purple") {
    document.querySelector("#theme-style").href = "Styles/purple.css";
  }
  // Storing the theme in localstorage
  localStorage.setItem("theme", mode);
}
