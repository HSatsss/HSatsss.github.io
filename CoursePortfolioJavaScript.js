document.querySelectorAll('.certImg img').forEach(image => {
    image.onclick = (event) => {
        const popUp = document.querySelector('.popUpImg');
        const popUpImg = popUp.querySelector('img');
        popUpImg.src = event.target.src;
        popUp.style.display = 'block';

        document.querySelector('nav').style.position = 'relative';
    };
});

document.querySelector('.popUpImg').addEventListener('click', (event) => {
    if (event.target.tagName !== 'IMG') {
        document.querySelector('.popUpImg').style.display = 'none';
        document.querySelector('nav').style.position = 'fixed';
    }
});


const text = document.querySelector(".changingText");

const newText = () => {
    setTimeout (() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout (() => {
        text.textContent = "Artist";
    }, 4000);
    setTimeout (() => {
        text.textContent = "Programmer";
    }, 8000);
    setTimeout (() => {
        text.textContent = "Musician";
    }, 12000);
}

newText();
setInterval(newText, 16000);


