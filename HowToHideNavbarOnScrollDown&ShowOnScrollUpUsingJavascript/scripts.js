let lastScrollTop = 0;

var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    console.log(scrollTop);

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }

    lastScrollTop = scrollTop;
})