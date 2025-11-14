gsap.registerPlugin(ScrollTrigger);

// Hero Logo Animation
gsap.to(".hero-logo", { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" });

// Hero Text Animation
gsap.to(".hero h1", { rotateX: 0, y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" });
gsap.to(".hero p", { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" });
gsap.to(".hero-btn", { opacity: 1, y: 0, duration: 1, delay: 1.1, ease: "power3.out" });

// Panels Scroll Animation
document.querySelectorAll('.panel').forEach(panel => {
    gsap.fromTo(panel, { y: 80, scale: 0.95, opacity: 0 }, {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            end: "bottom 60%",
            scrub: 0.8
        }
    });
});

// Hero Text 3D Scroll
gsap.to(".hero h1", {
    rotateX: -5,
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
});
gsap.to(".hero p", {
    y: -20,
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
});

// SCROLL-TO OFFSET FÜR NAV-LINKS
const headerOffset = document.querySelector('header').offsetHeight;
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    });
});

// LOGO-KLICK SCROLL ZUM TOP
document.getElementById('logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});