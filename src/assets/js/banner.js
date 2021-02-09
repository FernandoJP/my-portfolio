document.addEventListener('mousemove', paralax);

function paralax(e) {
    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const yOffset = e.pageY || window.pageXOffset + layer.getBoundingClientRect().top;
        const xOffset = e.pageX || window.pageYOffset + layer.getBoundingClientRect().left;

        const x = (window.innerWidth - xOffset*speed) / 100;
        const y = (window.innerHeight - yOffset*speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

const event = new Event(
    'mousemove',
    { bubbles: false, cancelable: false });
document.dispatchEvent(event);

window.addEventListener('scroll', () => {
    const value = window.scrollY;
    const bannerHeading = document.querySelector('.banner__heading');

    bannerHeading.style.top = `calc(50% + ${value * 0.15}px)`;
    bannerHeading.style.opacity = `${100 - value * 0.15}%`;
});