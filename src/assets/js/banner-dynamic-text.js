async function init() {
    const textElement = document.querySelector('.banner__dynamic-text');
    const texts = ['JavaScript', 'Angular', 'React'];
    let currentTextIndex = 0;
    
    while(true) {
        await selectElement(textElement);
        await changeChars(textElement, texts[currentTextIndex]);
        currentTextIndex++;
        if(currentTextIndex==3) currentTextIndex = 0;
    }
}

async function changeChars(textElement, text) {
    return new Promise((resolve) => {
        const staticTextEl = document.querySelector('.banner__static-text');
        if(text.split('')[0].match(/^[AEYIUO]+$/)) {
            staticTextEl.textContent = "I'm an";
        } else {
            staticTextEl.textContent = "I'm a";
        }
        let currentCharsIndex = 0;
        textElement.textContent = text.split('')[0];
        const interval = setInterval(() => {
            currentCharsIndex++;
            textElement.textContent += text.split('')[currentCharsIndex];
            if(currentCharsIndex >= text.length-1) { 
                clearInterval(interval);
                const textCaretEl = document.querySelector('.banner__text-caret');
                textCaretEl.style.display = 'inline-block';
                setTimeout(() => {
                    textCaretEl.style.display = 'none';
                    resolve();
                }, 3250);
            }
        }, 300);
    });
}

async function selectElement(textElement) {
    textElement.style.background = '#0663d2';

    return new Promise((resolve) => {
        setTimeout(() => {
            textElement.style.background = 'transparent';
            resolve();
        },1000)
    });
}


init();