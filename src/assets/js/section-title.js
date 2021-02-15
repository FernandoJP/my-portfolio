window.addEventListener('scroll', () => {
    const skillsEl = document.querySelectorAll('.section-title__line');

    skillsEl.forEach((element, i) => {
         const elWidth = 200 - element.getBoundingClientRect().top * 100 / (window.outerHeight / 2);
         const elWidthUpdated = elWidth > 100 ? 100 : elWidth;
         element.style.width = `${elWidthUpdated}%`;
    });
});