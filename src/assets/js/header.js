window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    console.log(window.scrollY > 0);
    header.classList.toggle('header--sticky', window.scrollY > 0);
})
