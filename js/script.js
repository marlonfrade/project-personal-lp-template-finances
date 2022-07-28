const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fade = document.querySelectorAll('.has-fade');

const handleBtnHamburgerClick = () => {
    if (header.classList.contains('open')) {
        body.classList.remove('noScroll');
        header.classList.remove('open');
        fade.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })



    } else {
        body.classList.add('noScroll');
        header.classList.add('open');
        fade.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })

    }
}

