let nav = document.querySelector("nav");
let hamburger = document.querySelector("img.hamburger");
let close = document.querySelector(".close");

function toggleNav() {
    if (nav.style.visibility == 'hidden') {
        nav.style.visibility = 'visible';
        hamburger.style.visibility = 'hidden';
        close.style.display = 'block';
    } else {
        nav.style.visibility = 'hidden';
        hamburger.style.visibility = 'visible';
        close.style.display = 'none';
    }
}