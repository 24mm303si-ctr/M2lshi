/* ========================================================
   ANIMATION AU DÉFILEMENT (INTERSECTION OBSERVER)
   ======================================================== */

document.addEventListener("DOMContentLoaded", function() {
    // 1. On liste tous les éléments qu'on veut animer
    const elementsToAnimate = document.querySelectorAll('h1, h2, p, .service-card, .welcome-card, .team-card, .value-card, .whatsapp-container, .btn-whatsapp, .hero-img, .service-detail-card, .about-text, .about-image-box');

    // 2. On leur ajoute la classe CSS 'scroll-reveal' pour les cacher au départ
    elementsToAnimate.forEach(el => {
        el.classList.add('scroll-reveal');
    });

    // 3. On crée l'observateur qui détecte quand un élément entre dans l'écran
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si l'élément est visible à l'écran
            if (entry.isIntersecting) {
                // On utilise 'is-visible' au lieu de 'active' pour éviter les bugs
                entry.target.classList.add('is-visible');
                
                // On arrête d'observer pour que l'animation ne se joue qu'une fois
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Se déclenche quand 10% de l'élément est visible
    });

    // 4. On demande à l'observateur de surveiller tous nos éléments
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});