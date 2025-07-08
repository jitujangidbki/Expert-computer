document.addEventListener('DOMContentLoaded', () => {

    // --- Preloader ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.classList.add('loaded');
        }
    });

    // --- Custom Cursor ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', e => {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: 'forwards' });
        });

        const clickableElements = document.querySelectorAll('a, button, .card, .service-item');
        clickableElements.forEach(el => {
            el.addEventListener('mouseover', () => cursorOutline.classList.add('cursor-grow'));
            el.addEventListener('mouseout', () => cursorOutline.classList.remove('cursor-grow'));
        });
    }

    // --- Header Scroll Effect ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // --- Mobile Navigation ---
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isVisible = mobileNav.style.display === 'flex';
            mobileNav.style.display = isVisible ? 'none' : 'flex';
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars', isVisible);
            icon.classList.toggle('fa-times', !isVisible);
        });
    }

    // --- Advanced Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    animatedElements.forEach(el => observer.observe(el));

});
