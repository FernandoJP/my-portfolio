window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('header--sticky', window.scrollY > 0);
})
