const header = document.querySelector('.header')
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 20 && window.innerWidth > 700) {
        header.classList.add('stick')
    } else {
        header.classList.remove('stick')
    }

})
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body')
const _header = document.querySelector('.header')

hamburger.addEventListener('click', () => {
    _header.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('over-flow-hidden')
})
const arrow = document.querySelector('.arrow-down')
if (arrow) {
    arrow.addEventListener('click', () => {
        document.body.scrollTop = window.innerHeight;
        document.documentElement.scrollTop = window.innerHeight;
    })
}