// ! api Used for Quote - https://github.com/lukePeavey/quotable
const quote = document.getElementById('quote');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteBtn = document.getElementById('quoteBtn');
const copyEl = document.getElementById('copy');
const hiddenForCopy = document.getElementById('forCopy');

generateQuote();
quoteBtn.addEventListener('click', generateQuote);
copyEl.addEventListener('click', copyQuoteToClipboard);

function generateQuote() {
	// ! From The Official Site
	fetch('https://api.quotable.io/random')
		.then((response) => response.json())
		.then((data) => {
			quote.innerHTML = data.content;
			quoteAuthor.innerHTML = `—${data.author}`;
			hiddenForCopy.value = `"${data.content}" —${data.author}`;
		});
}
function copyQuoteToClipboard() {
	const copyQuote = hiddenForCopy;
	copyQuote.select();
	navigator.clipboard.writeText(copyQuote.value);
	copyEl.innerHTML = `<i class="fas fa-copy"></i> Copied`;
	setTimeout(() => {
		copyEl.innerHTML = `<i class="far fa-copy"></i> Copy`;
	}, 500);
}
