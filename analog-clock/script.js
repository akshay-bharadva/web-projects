const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const scale = (num, in_min, in_max, out_min, out_max) => {
	return (
		((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
	);
};

const days = [
	'Sunday',
	'Monday',
	'Tuseday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nav',
	'Dec',
];
toggle.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	console.log(html);
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerText = 'Dark Mode';
	} else {
		html.classList.add('dark');
		e.target.innerText = 'Light Mode';
	}
});

function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDay();
	const date = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12 === 0 ? 12 : hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const ampm = hours > 12 ? 'PM' : 'AM';

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360
	)}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360
	)}deg)`;
	timeEl.innerHTML = `${hoursForClock}:${
		minutes < 10 ? `0${minutes}` : minutes
	} ${ampm}`;
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
	// dateEl;
}
setTime();
setInterval(setTime, 1000);

// Quote

const quote = document.getElementById('quote');
const quoteAuthor = document.getElementById('quoteAuthor');
generateQuote();
function generateQuote() {
	// ! From The Official Site
	fetch('https://api.quotable.io/random?maxLength=50')
		.then((response) => response.json())
		.then((data) => {
			quote.innerHTML = data.content;
			quoteAuthor.innerHTML = `—${data.author}`;
		});
}
setInterval(generateQuote, 100000);
