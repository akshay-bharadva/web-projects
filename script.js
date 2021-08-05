// ! api Used for Quote - https://github.com/lukePeavey/quotable
const quote = document.getElementById('quote');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteBtn = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', generateQuote);

generateQuote();

function generateQuote() {
	// ! From The Official Site
	fetch('https://api.quotable.io/random')
		.then((response) => response.json())
		.then((data) => {
			quote.innerHTML = data.content;
			quoteAuthor.innerHTML = `—${data.author}`;
		});
}
