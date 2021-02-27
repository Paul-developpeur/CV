const typing = document.querySelector('.typing');

let typewriter = new Typewriter(typing, {
    loop: true
});

typewriter.typeString('Bienvenue sur mon CV !')
    .pauseFor(100000)
    .start();

const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const Intersect = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
}
    
const observer = new IntersectionObserver(Intersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach((r) => {
    observer.observe(r);
});

const navbar = document.querySelector('.navbarHam');
const ham = document.querySelector('.ham');
const listsHamburger = document.querySelectorAll('.menulink');

const toogleHamburger = () => {
    navbar.classList.toggle('showNav');
    navbar.classList.toggle('showClose');
    document.querySelector('section').style.display = 'none';
}

ham.onclick = toogleHamburger;

function HtmlBar() {
    const elem = document.getElementById("htmlbar");   
    let width = 20;
    const id = setInterval(frame, 30);
    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = 'HTML : ' + width * 1  + '%';
            elem.style.fontSize = '20px';
        }
    }
}
HtmlBar();

function CssBar() {
    const elem = document.getElementById("cssbar");   
    let width = 20;
    const id = setInterval(frame, 30);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = 'CSS : ' + width * 1  + '%';
            elem.style.fontSize = '20px';
        }
    }
}
CssBar();

function jsBar() {
    const elem = document.getElementById("jsbar");   
    let width = 20;
    const id = setInterval(frame, 30);
    function frame() {
        if (width >= 50) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = 'JAVASCRIPT : ' + width * 1  + '%';
            elem.style.fontSize = '20px';
        }
    }
}
jsBar();

function phpbar() {
    const elem = document.getElementById("php");   
    let width = 20;
    const id = setInterval(frame, 30);
    function frame() {
        if (width >= 30) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = 'PHP : ' + width * 1  + '%';
            elem.style.fontSize = '20px';
        }
    }
}
phpbar();

function bootstrapbar() {
    const elem = document.getElementById("bootstrap");   
    let width = 20;
    const id = setInterval(frame, 30);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = 'BOOTSTRAP : ' + width * 1  + '%';
            elem.style.fontSize = '20px';
        }
    }
}
bootstrapbar();

    