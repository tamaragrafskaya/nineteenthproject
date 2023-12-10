const burgerEl = document.querySelector('.burger-menu');

let menuEl = document.querySelector('.menu');
menuEl.style.display = 'none';

burgerEl.addEventListener('click', function (e) {
    if (menuEl.style.display === 'none') {
        menuEl.style.display = 'block'

    } else {
        menuEl.style.display = 'none'

    }
})