window.addEventListener('scroll', () => {
    const skillsEl = document.querySelectorAll('.skills__html');
    const scrollY = window.scrollY / 100 - 3;
    console.log(window.scrollY, scrollY);
    //skillsEl.style.width = `calc(${updatedBarWidth}% - 9.0rem)`;

    skillsEl.forEach((element, i) => {
        console.log(element, i);
        element.querySelectorAll('.stars__star').forEach((star, j) => {
            if(scrollY-i > j) {
                star.classList.remove('stars__star--hide')
                !star.classList.contains('stars__star--visible') && star.classList.add('stars__star--visible');
            } else {
                star.classList.remove('stars__star--visible')
                !star.classList.contains('stars__star--hide') && star.classList.add('stars__star--hide');
            }
        });
    });
});