'use strict'
$(function() {
    $('.organizators .slider').slick({
        autoplay: true,
        arrows: false
    });
    $('.partners .slider').slick({
        autoplay: true,
        arrows: false
    });
});

const pages = document.querySelectorAll('.registration_form .page');
const [prevBtn, nextBtn] = document.querySelectorAll('.registration .btn_navigation button');

let activePage = 0;

const updateButton = () => {
    switch(activePage) {
        case 0:
            prevBtn.setAttribute('disabled', 'true'); break;
        case 2:
            nextBtn.innerText = 'Отправить';
            nextBtn.setAttribute('type', 'submit');
            break;
        default:
            nextBtn.innerText = 'Продолжить';
            nextBtn.setAttribute('type', 'button');
            prevBtn.removeAttribute('disabled'); 
            break;
    }
}

const nextPage = (currentPage) => {
    for (let page of pages) {
        page.classList.remove('active');
    }

    activePage = currentPage === 2 ? 2 : currentPage + 1;
    updateButton();

    pages[activePage].classList.add('active');
}

const prevPage = (currentPage) => {
    for (let page of pages) {
        page.classList.remove('active');
    }

    activePage = currentPage === 0 ? 0 : currentPage - 1;
    updateButton();

    pages[activePage].classList.add('active');
}

nextBtn.addEventListener('click', () => nextPage(activePage));
prevBtn.addEventListener('click', () => prevPage(activePage));
