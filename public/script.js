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


let slideIndex = 0;
const mySlides = document.querySelector('.mySlides')
if (mySlides) {
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    var sliedsContainer = document.querySelector(".slidesContainer")
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    var background = `${slideIndex + 1 + '.webp'}`
    if (sliedsContainer.classList.contains('home')) {
        sliedsContainer.style.backgroundImage = `url('/img/homeSlides/${background}')`
    } else {
        sliedsContainer.style.backgroundImage = `url('/img/slides/${background}')`
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}
