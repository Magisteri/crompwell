const body = document.querySelector('body');
const ham = document.querySelector('.ham');
const links = document.querySelector('#links');
const smNav = document.querySelector('.smNav');
const header = document.querySelector('#header');
const light = document.querySelector('.light');
const root = document.querySelector(':root');
const btn = document.querySelector('#myBtn');
var i = 0;
var l = 0;

function sizeCheck() {
    if (window.matchMedia("(max-width: 1080px)").matches) {
        links.style.height = "0";
        links.style.display = "none";
        header.style.height = "65px";
        i = 0;
    } else {
        links.style.height = "auto";
        links.style.display = "grid";
        header.style.height = "auto";
    }
}

function openMenu() {
    if (window.matchMedia("(max-width: 1080px)").matches) {
        if (i == 0) {
            links.style.height = "auto";
            links.style.display = "block";
            header.style.height = "auto";
            i += 1;
        } else {
            links.style.height = "0";
            links.style.display = "none";
            header.style.height = "65px";
            i = 0;
        }
    }
}

function switchTheme() {
    if (l == 0) {
        document.documentElement.style.setProperty('--bkgd', '#0A0A0A');
        document.documentElement.style.setProperty('--txt', 'white');
        document.documentElement.style.setProperty('--acc', '#606060');
        l += 1;
    } else {
        document.documentElement.style.setProperty('--bkgd', '#F7F7F7');
        document.documentElement.style.setProperty('--txt', '#0A0A0A');
        document.documentElement.style.setProperty('--acc', 'rgb(180, 180, 180)');
        l = 0;
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    } else {
        btn.style.opacity = "0";
        btn.style.cursor = "default";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

light.addEventListener('click', switchTheme);
window.addEventListener('resize', sizeCheck);
ham.addEventListener('click', openMenu);