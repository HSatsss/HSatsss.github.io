const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('newQuoteBtn');
const copyButton = document.getElementById('copyQuoteBtn');

function fetchQuote() {
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    fetch('https://dummyjson.com/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}
function copyToClipboard() {
    const quoteText = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

button.addEventListener('click', fetchQuote);
copyButton.addEventListener('click', copyToClipboard);

fetchQuote();
