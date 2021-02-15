// const base = window.scrollY - document.querySelector('.sun').getBoundingClientRect().top;

const bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.querySelector('.sun').getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;

window.addEventListener('scroll', () => {
    const sunEl = document.querySelector('.sun');
    const rayEl = document.querySelector('.ray-wrapper');
    const skyEl = document.querySelector('.contact__bg-sky');
    const montainEL = document.querySelector('.contact__bg-montain');
    const groundEl = document.querySelector('.contact__bg-ground');

    const elTop = (window.scrollY - offset - window.outerHeight / 20);
    const elTopUpdated = elTop * 0.03 + 14;
    let elTopMinMax = minMax(elTopUpdated, 5, 14);

    const shadowBlur = minMax( 1000  * (1000 / (elTop+10000))*10-985, 35, 90);
    const shadowBlurMinMax = minMax( shadowBlur, 35, 90);
    const shadowSpreadMinMax = minMax( shadowBlur - 20, 2, 55);

    const saturation = 1000  * (1000 / (elTop+10000))*0.5-50;
    const saturationMinMax = minMax( saturation, 0.8, 2);
    const brightnessMinMax = minMax((1000  * (1000 / (elTop+10000))*0.5-50) * 0.5 + 0.5, 0.8, 1.5);
    const imageFilterCss = `saturate(${saturationMinMax}) brightness(${brightnessMinMax})`;

    console.log(saturationMinMax, brightnessMinMax);
    sunEl.style.top = elTopMinMax+'rem';
    sunEl.style.boxShadow = `0 0 ${shadowBlurMinMax}px ${shadowSpreadMinMax}px #fff`;
    rayEl.style.top = elTopMinMax+'rem';
    skyEl.style.filter = imageFilterCss;
    montainEL.style.filter = imageFilterCss;
    groundEl.style.filter = imageFilterCss;
});

function minMax(value, min, max) {
    return ((value > max) ? max : (value < min) ? min : value);
}