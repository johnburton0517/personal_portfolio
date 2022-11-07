
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbarScroll');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarScroll');
    }
    else {
        header.classList.remove('navbarScroll');
    }
}