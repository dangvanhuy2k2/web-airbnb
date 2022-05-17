var openSearcNav = document.querySelector('.heading__nav');
var seaechNavTop = document.querySelector('.heading__nav-second');
var seachNav = document.querySelector('.header__body-nav');
var searchNavlist1 = document.querySelector('.header__body-list');
var searchNavlist2 = document.querySelector('.header__body-list-second');
var btnTraiNghiem = document.querySelector('.heading__nav-second-list li:last-child');
var headerBottom = document.querySelector('.header__bottom');
openSearcNav.addEventListener('click', function() {
    openSearcNav.classList.toggle('hide');
    seaechNavTop.classList.toggle('hide');
    seachNav.classList.toggle('hide');
    searchNavlist1.classList.toggle('hide');
    headerBottom.classList.toggle('hide');
})
btnTraiNghiem.addEventListener('click', function() {
    searchNavlist1.classList.toggle('hide');
    searchNavlist2.classList.toggle('hide');
})

var openFormSelect = document.querySelector('.openFormSelect');
var modal = document.querySelector('.modal');
var formSelect = document.querySelector('.form-select');
var iconClose = document.querySelector('.select-top__icon');
openFormSelect.addEventListener('click', function() {
    modal.classList.toggle('hide');
    formSelect.classList.toggle('hide');
})
iconClose.addEventListener('click', function() {
    modal.classList.toggle('hide');
    formSelect.classList.toggle('hide');
})
modal.addEventListener('click', function() {
    formSelect.classList.toggle('hide');
    modal.classList.toggle('hide');
})