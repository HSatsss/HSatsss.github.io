// Select all certification images
document.querySelectorAll('.certImg img').forEach(image => {
    image.onclick = (event) => {
        const popUp = document.querySelector('.popUpImg');
        const popUpImg = popUp.querySelector('img'); 
        
        popUpImg.src = event.target.src; // Set clicked image as popup image
        popUp.style.display = 'block';  // Show popup
    };
});

// Close popup when clicking the close button (×)
document.querySelector('.popUpImg span').onclick = () => {
    document.querySelector('.popUpImg').style.display = 'none';
};

// Close popup when clicking outside the image
document.querySelector('.popUpImg').onclick = (event) => {
    if (event.target === document.querySelector('.popUpImg')) {
        document.querySelector('.popUpImg').style.display = 'none';
    }
};



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


