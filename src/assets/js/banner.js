document.addEventListener('mousemove', paralax);

function paralax(e) {
    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        var yOffset = e.pageY || window.pageXOffset + layer.getBoundingClientRect().top;
        var xOffset = e.pageX || window.pageYOffset + layer.getBoundingClientRect().left;

        const x = (window.innerWidth - xOffset*speed) / 100;
        const y = (window.innerHeight - yOffset*speed) / 100;
        console.log(yOffset, xOffset);
        //console.log(layer.getBoundingClientRect().top + document.body.scrollTop);

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

var event = new Event(
    'mousemove',
    { bubbles: false, cancelable: false });
document.dispatchEvent(event);

window.addEventListener('scroll', () => {
    var value = window.scrollY;
    var bannerHeading = document.querySelector('.banner__heading');

    bannerHeading.style.top = `calc(50% + ${value * 0.15}px)`;
    bannerHeading.style.opacity = `${100 - value * 0.15}%`;
});