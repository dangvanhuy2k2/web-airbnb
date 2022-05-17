var openSearcNav = document.querySelector(' heading__nav');
var seaechNavTop = document.querySelector('heading__nav-second');
var seachNav = document.querySelector('header__body-nav');
openSearcNav.addEventListener('click', function() {
    openSearcNav.classList.toggle('hide');
    seaechNavTop.classList.toggle('hide');
    seachNav.classList.toggle('hide');
})