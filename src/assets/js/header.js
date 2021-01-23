window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('header--sticky', window.scrollY > 0);
})
