const API_KEY = `85158a9135a0bc5d3b0bf400422f0279`
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=`;
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const next = document.getElementById('next');
const prev = document.getElementById('prev');

let pageNo = 1;

getMovies(API_URL + 1);

function showMovies(movies) {
	main.innerHTML = '';
	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;
		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');
		movieEl.innerHTML = `
			<span class="rate ${getClassByRate(vote_average)}">${vote_average}</span>
            <img src="${IMG_PATH + poster_path}" alt="" />
            <div class="movie-info">
			<h3>${title}</h3>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `;
		main.appendChild(movieEl);
	});
}
function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 6) {
		return 'orange';
	} else if (vote >= 4) {
		return 'yellow';
	} else {
		return 'red';
	}
}
async function getMovies(url) {
	const res = await fetch(url);
	const data = await res.json();
	showMovies(data.results);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_URL + searchTerm);
		search.value = '';
	} else {
		window.location.reload();
	}
});

next.addEventListener('mouseover', () => {
	if (pageNo === 500) {
		next.classList.add('disable');
	} else {
		next.classList.remove('disable');
	}
});
prev.addEventListener('mouseover', () => {
	if (pageNo === 1) {
		prev.classList.add('disable');
	} else {
		prev.classList.remove('disable');
	}
});
next.addEventListener('click', () => {
	if (pageNo < 500) {
		pageNo++;
		getMovies(API_URL + pageNo);
		console.log(pageNo);
	}
});
prev.addEventListener('click', () => {
	if (pageNo > 1) {
		pageNo--;
		getMovies(API_URL + pageNo);
		console.log(pageNo);
	}
});
