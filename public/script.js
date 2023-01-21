const header = document.querySelector('.header')
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 20) {
        header.classList.add('stick')
    } else {
        header.classList.remove('stick')
    }

})

for (var i = 1; i < 3; i++) {
    const menu = document.querySelector(`.menu${i}`)
    const showBtn = document.querySelector(`.show-subMenu${i}`)
    if (showBtn) {
        showBtn.addEventListener('mouseover', () => {
            menu.classList.add('show-menu')
        })
        showBtn.addEventListener('mouseleave', () => {
            menu.classList.remove('show-menu')
        })
    }
}

ScrollReveal({
    reset: false,
    distance: '200px',
    duration: 1500,
    delay: 60
})

ScrollReveal().reveal('.mission-image', { origin: 'left', delay: 200, rotate: { y: 20, x: 20 } });
ScrollReveal().reveal('.mission-text-container', { origin: 'right' });
ScrollReveal().reveal('.vision', { origin: 'bottom', delay: 500 });
ScrollReveal().reveal('.cta_card', { origin: 'left', interval: 100 });
ScrollReveal().reveal('.career-img, .content', { origin: 'bottom', interval: 300 });
ScrollReveal().reveal('.brand', { origin: 'bottom', interval: 100 });
// ScrollReveal().reveal('.footer', { origin: 'top' });
// ScrollReveal().reveal('.mission', { origin: 'bottom' });