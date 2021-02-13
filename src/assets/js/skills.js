window.addEventListener('scroll', () => {
    const skillsEl = document.querySelectorAll('[data-stars]');

    skillsEl.forEach((element, i) => {
        const elScrollY = window.outerHeight-element.getBoundingClientRect().top;
         const windowHeight = window.outerHeight / 3;
         element.querySelectorAll('.stars__star').forEach((star, j) => {
            if(windowHeight / 2 * j < elScrollY) {
                star.classList.remove('stars__star--hide')
                !star.classList.contains('stars__star--visible') && star.classList.add('stars__star--visible');
            } else {
                star.classList.remove('stars__star--visible')
                !star.classList.contains('stars__star--hide') && star.classList.add('stars__star--hide');
            }
        });
    });
});

document.querySelectorAll('[data-stars]').forEach(starContainer => {
    const starsQtd = starContainer.getAttribute('data-stars');
    [...Array(parseInt(starsQtd)).keys()].forEach(index => {
        starContainer.insertAdjacentHTML( 'beforeend', `
            <div class="stars__container">
                <img src="assets/images/star.svg" alt="Star icon" class="stars__star stars__star--hide">
            </div>
        `)
    });
})