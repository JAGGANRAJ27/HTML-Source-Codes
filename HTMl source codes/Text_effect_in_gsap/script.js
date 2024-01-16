const subheaders = ["Ho-Ho your journey begins", "Here who I am", "Ring-ring! Ping me here", "Welcome to my artworks"];
const menus = document.querySelectorAll('.item1, .item2, .item3, .item4');
const head = document.querySelector('.head');
const subhead = document.querySelector('.subhead');

function changeColors() {
    gsap.to('.container', { backgroundColor: '#f7f7f8', duration: 0.5 });
    gsap.to('.head,nav,footer,p', { backgroundColor: '#f7f7f8', duration: 0.5 });
}

function revertColors() {
    gsap.to('.container', { backgroundColor: '#f7f7f8', duration: 0.5 });
    gsap.to('.head,nav,footer,p', { backgroundColor: '#f7f7f8', duration: 0.5 });
}

menus.forEach((menu) => {
    menu.addEventListener('mouseover', changeColors);
    menu.addEventListener('mouseout', revertColors);
});

function wrapLetters(text) {
    placeholder.innerHTML = '';
    [...text].forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.filter = "blur(8px)";
        placeholder.appendChild(span);
    });
}

function animateBlurEffect() {
    const letters = head.children;
    let index = 0;

    function clearNextLetter() {
        if (index < letters.length) {
            gsap.to(letters[index], { filter: 'blur(0px)', duration: 0.5 });
            index++;
            if (index < letters.length) {
                setTimeout(clearNextLetter, 100);
            }
        }
    }

    setTimeout(clearNextLetter, 0);
}

function shuffleLetters(finalText) {
    wrapLetters('');
    wrapLetters(finalText.replace(/./g, ''));

    let textArray = finalText.split('');
    let shufflingCounter = 0;
    let intervalHandles = [];

    function shuffle(index) {
        if (shufflingCounter < 30) {
            textArray[index] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
            placeholder.children[index].textContent = textArray[index];
        } else {
            placeholder.children[index].textContent = finalText.charAt(index);
            clearInterval(intervalHandles[index]);
        }
    }

    for (let i = 0; i < finalText.length; i++) {
        intervalHandles[i] = setInterval(shuffle, 80, i);
    }

    setTimeout(() => {
        shufflingCounter = 30;
        for (let i = 0; i < finalText.length; i++) {
            placeholder.children[i].textContent = finalText.charAt(i);
            clearInterval(intervalHandles[i]);
        }
        animateBlurEffect();
    }, 1000);
}

function updatePlaceholderText(event) {
    const newText = event.target.textContent.toUpperCase();
    const itemIndex = Array.from(menus).indexOf(event.target);
    const newSubHeaderText = subheaders[itemIndex].toUpperCase();
    head.textContent = newText;
    subhead.textContent = newSubHeaderText;
    animateScale();
    shuffleLetters(newText);
}

function resetPlaceholderText() {
    const defaultText = 'NJWEBDESIGNING';
    const defaultSubHeaderText = 'STEP INTO THE DIGITAL WONDERLAND';
    head.textContent = defaultText;
    subhead.textContent = defaultSubHeaderText;
    animateScale();
    shuffleLetters(defaultText);
}

menus.forEach((menu) => {
    menu.addEventListener('mouseover', updatePlaceholderText);
    menu.addEventListener('mouseout', resetPlaceholderText);
});
