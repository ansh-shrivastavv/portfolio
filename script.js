// =====================================================
// PREMIUM PORTFOLIO — OPTIMIZED JS
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    initPreloader();
    initLenis();
    initCursor();
    initMouseGlow();
    initNavbar();
    initMobileMenu();
    initMagneticElements();
    initHeroAnimations();
    initScrollAnimations();
    initParallax();
    initProjectHover();

});


// =====================================================
// PRELOADER
// =====================================================

function initPreloader() {

    const preloader = document.querySelector(".preloader");
    const line = document.querySelector(".loader-line span");

    if (!preloader || !line) return;

    const tl = gsap.timeline();

    tl.to(line, {
        width: "100%",
        duration: 1.4,
        ease: "power2.inOut"
    })
    .to(preloader, {
        yPercent: -100,
        duration: .8,
        ease: "power4.inOut",
        onComplete: () => {
            preloader.remove();
            document.body.classList.remove("loading");
        }
    });

}


// =====================================================
// LENIS — CORRECT SINGLE RAF
// =====================================================

function initLenis() {

    if (typeof Lenis === "undefined") return;

    const lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.2,
        infinite: false
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(1000, 16);

}


// =====================================================
// CURSOR — ONE ANIMATION LOOP
// =====================================================

function initCursor() {

    if (window.innerWidth <= 900) return;

    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");

    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.set(dot, {
            x: mouseX,
            y: mouseY
        });

    }, { passive: true });


    gsap.ticker.add(() => {

        outlineX += (mouseX - outlineX) * 0.16;
        outlineY += (mouseY - outlineY) * 0.16;

        gsap.set(outline, {
            x: outlineX,
            y: outlineY
        });

    });


    document.querySelectorAll("a, button, .magnetic, .service-card, .project-card")

        .forEach((element) => {

            element.addEventListener("mouseenter", () => {
                outline.classList.add("active");
            });

            element.addEventListener("mouseleave", () => {
                outline.classList.remove("active");
            });

        });

}


// =====================================================
// MOUSE GLOW — OPTIMIZED
// =====================================================

function initMouseGlow() {

    if (window.innerWidth <= 900) return;

    const glow = document.querySelector(".mouse-glow");

    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;

    window.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    }, { passive: true });


    gsap.ticker.add(() => {

        glowX += (mouseX - glowX) * 0.07;
        glowY += (mouseY - glowY) * 0.07;

        gsap.set(glow, {
            x: glowX,
            y: glowY
        });

    });

}


// =====================================================
// NAVBAR
// =====================================================

function initNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    let lastState = false;

    window.addEventListener("scroll", () => {

        const scrolled = window.scrollY > 60;

        if (scrolled !== lastState) {

            navbar.classList.toggle("scrolled", scrolled);

            lastState = scrolled;

        }

    }, { passive: true });

}


// =====================================================
// MOBILE MENU
// =====================================================

function initMobileMenu() {

    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });

}


// =====================================================
// MAGNETIC — LIGHTWEIGHT
// =====================================================

function initMagneticElements() {

    document.querySelectorAll(".magnetic").forEach(element => {

        let raf;

        element.addEventListener("mousemove", (e) => {

            cancelAnimationFrame(raf);

            raf = requestAnimationFrame(() => {

                const rect = element.getBoundingClientRect();

                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(element, {
                    x: x * 0.18,
                    y: y * 0.18,
                    duration: 0.35,
                    overwrite: true,
                    ease: "power2.out"
                });

            });

        });


        element.addEventListener("mouseleave", () => {

            gsap.to(element, {
                x: 0,
                y: 0,
                duration: .6,
                overwrite: true,
                ease: "elastic.out(1,.5)"
            });

        });

    });

}


// =====================================================
// HERO
// =====================================================

function initHeroAnimations() {

    const tl = gsap.timeline({
        delay: 1.6
    });

    tl.from(".hero-eyebrow", {
        y: 25,
        opacity: 0,
        duration: .7,
        ease: "power3.out"
    })

    .from(".title-line", {
        y: 90,
        opacity: 0,
        filter: "blur(12px)",
        duration: .9,
        stagger: .12,
        ease: "power4.out"
    }, "-=.35")

    .from(".hero-description", {
        y: 20,
        opacity: 0,
        duration: .6
    }, "-=.45")

    .from(".hero-actions", {
        y: 20,
        opacity: 0,
        duration: .6
    }, "-=.35")

    .from(".hero-top, .hero-bottom", {
        opacity: 0,
        duration: .5
    }, "-=.4");


    gsap.from(".floating-icon", {
        scale: .5,
        opacity: 0,
        duration: .8,
        stagger: .1,
        delay: 2,
        ease: "power3.out"
    });


    gsap.from(".hero-character", {
        scale: .8,
        opacity: 0,
        duration: 1,
        delay: 1.8,
        ease: "power3.out"
    });

}


// =====================================================
// SCROLL ANIMATIONS
// =====================================================

function initScrollAnimations() {

    gsap.utils.toArray(".reveal-text").forEach(element => {

        gsap.from(element, {

            scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true
            },

            y: 50,
            opacity: 0,
            filter: "blur(10px)",

            duration: .9,

            ease: "power3.out"

        });

    });


    gsap.from(".service-card", {

        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
            once: true
        },

        y: 50,
        opacity: 0,

        stagger: .1,

        duration: .8,

        ease: "power3.out"

    });


    gsap.from(".project-card", {

        scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            once: true
        },

        y: 50,
        opacity: 0,

        stagger: .1,

        duration: .8,

        ease: "power3.out"

    });


    gsap.from(".stack-item", {

        scrollTrigger: {
            trigger: ".stack-list",
            start: "top 85%",
            once: true
        },

        x: 30,
        opacity: 0,

        stagger: .06,

        duration: .6

    });


    gsap.from(".contact-content", {

        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            once: true
        },

        y: 50,
        opacity: 0,

        duration: .9,

        ease: "power3.out"

    });

}


// =====================================================
// PARALLAX — ONLY DESKTOP
// =====================================================

function initParallax() {

    if (window.innerWidth <= 900) return;

    const elements = document.querySelectorAll(".parallax-item");

    if (!elements.length) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;


    window.addEventListener("mousemove", (e) => {

        mouseX = (e.clientX / window.innerWidth - .5) * 2;
        mouseY = (e.clientY / window.innerHeight - .5) * 2;

    }, { passive: true });


    gsap.ticker.add(() => {

        currentX += (mouseX - currentX) * .04;
        currentY += (mouseY - currentY) * .04;

        elements.forEach((element, index) => {

            const strength = Math.min((index + 1) * 3, 12);

            gsap.set(element, {

                x: currentX * strength,
                y: currentY * strength

            });

        });

    });

}


// =====================================================
// PROJECT HOVER
// =====================================================

function initProjectHover() {

    if (window.innerWidth <= 900) return;

    document.querySelectorAll(".project-card").forEach(card => {

        const visual = card.querySelector(".project-visual");

        if (!visual) return;


        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - .5;
            const y = (e.clientY - rect.top) / rect.height - .5;


            gsap.to(visual, {

                rotateX: y * -4,
                rotateY: x * 4,

                duration: .4,

                overwrite: true

            });

        });


        card.addEventListener("mouseleave", () => {

            gsap.to(visual, {

                rotateX: 0,
                rotateY: 0,

                duration: .6,

                overwrite: true

            });

        });

    });

}


// =====================================================
// SMOOTH ANCHOR
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// =====================================================
// RESIZE
// =====================================================

let resizeTimer;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

        ScrollTrigger.refresh();

    }, 250);

});