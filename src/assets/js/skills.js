window.addEventListener('scroll', () => {
    const value = window.scrollY;
    const skillsHtml = document.querySelector('.skills__bar-html');
    console.log(window.scrollY);
    const barWidth = (value-200) / 6;
    const updatedBarWidth = barWidth > 100 ? 100 : barWidth;
    skillsHtml.style.width = `calc(${updatedBarWidth}% - 9.0rem)`;
});