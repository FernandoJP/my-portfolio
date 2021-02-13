window.addEventListener('scroll', () => {
    const skillsEl = document.querySelectorAll('.section-title__line');

    skillsEl.forEach((element, i) => {
         const elWidth = window.scrollY*2*100/window.outerHeight;
         const elWidthUpdated = elWidth > 100 ? 100 : elWidth;
         element.style.width = `${elWidthUpdated}%`;
    });
});