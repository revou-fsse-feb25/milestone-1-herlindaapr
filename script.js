// Type writer effect//
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// Hamburger menu //
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');

        menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
        menuBtn.classList.toggle('text-white');
        hamburger.classList.toggle('fixed');
        hamburger.classList.toggle('absolute');
});

// Event listener for scrolling//
document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        moveToNextSection();
    }

if (event.deltaY < 0) {
        moveToPrevSection();
    }
});

function moveToNextSection() {
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0;
    
    sections.forEach((section, index) => {
        if (window.scrollY >= section.offsetTop - 10) {
            currentSectionIndex = index;
        }
    });
    
    const nextSection = sections[currentSectionIndex + 1];
    if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: "smooth"
        });
    }
}

function moveToPrevSection() {
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0;
    
    sections.forEach((section, index) => {
        if (window.scrollY >= section.offsetTop - 10) {
            currentSectionIndex = index;
        }
    });
    
    const prevSection = sections[currentSectionIndex - 1];
    if (prevSection) {
        window.scrollTo({
            top: prevSection.offsetTop,
            behavior: "smooth"
        });
    }
}

function handleout(){ 
    mobileMenu.classList.toggle('translate-x-full');
    menuBtn.classList.toggle('text-white');
    hamburger.classList.toggle('fixed');
    hamburger.classList.toggle('absolute');
}