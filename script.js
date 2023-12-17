/*========================= type js =======================*/
const type = new Typed('.multiple-text', {
    strings: ['ZDSPGC-Aurora', 'BSIS-II', 'Gwapa' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/*========================= scroll reveal =======================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .headling', { origin: 'top' });
ScrollReveal().reveal('.home-image,', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });