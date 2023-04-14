const sliderContainer = document.querySelector('.slider-container');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const btnUp = document.querySelector('.up-btn');
const btnDown = document.querySelector('.down-btn');
const slideLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

btnUp.addEventListener('click', () => changeSlide('up'));
btnDown.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
	const slideHeight = sliderContainer.clientHeight;
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex > slideLength - 1) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex <= 0) {
			activeSlideIndex = slideLength - 1;
		}
	}
	rightSlide.style.transform = `translateY(-${
		activeSlideIndex * slideHeight
	}px)`;
	leftSlide.style.transform = `translateY(${
		activeSlideIndex * slideHeight
	}px)`;
};
