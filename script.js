// Sticky NavBar
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Theme Change
let theme = localStorage.getItem('theme')

let themeDots = document.getElementsByClassName('theme-dot')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('Mode: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'Styles/light.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'Styles/blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'Styles/green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'Styles/purple.css'
    }

    localStorage.setItem('theme', mode)
}