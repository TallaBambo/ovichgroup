const header = document.querySelector('.header')
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 20) {
        header.classList.add('stick')
    } else {
        header.classList.remove('stick')
    }

})
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

ScrollReveal({
    reset: true,
    distance: '200px',
    duration: 1500,
    delay: 60
})

ScrollReveal().reveal('.mission-image', { origin: 'left', delay: 200 });
ScrollReveal().reveal('.mission-text-container', { origin: 'right' });
ScrollReveal().reveal('.vision', { origin: 'bottom' });
ScrollReveal().reveal('.cta_card', { origin: 'left', interval: 100 });
ScrollReveal().reveal('.career-img, .content', { origin: 'bottom', interval: 300 });
ScrollReveal().reveal('.brand', { origin: 'bottom', interval: 100, distance: '100px' });
// ScrollReveal().reveal('.footer', { origin: 'top' });
// ScrollReveal().reveal('.mission', { origin: 'bottom' });