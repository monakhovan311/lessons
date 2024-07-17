
"use strict";
// ======= ДОМАШКА =======
// Задача1
document.addEventListener('click', documentAction);
function documentAction (e) {
	const targetElement = e.target;
	if(targetElement.closest('.items__item')) {
		const currentElement = targetElement.closest('.items__item')
		currentElement.classList.toggle('active')
		console.log(targetElement)
	}
	e.preventDefault()
}

// Задача2
window.addEventListener('load', pageLoaded);
function pageLoaded(e) {
	document.body.classList.add('loaded');
}

// Задача3
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

		header.addEventListener('mousemove', () => {
			footer.style.backgroundColor = "yellow";
		});
		header.addEventListener('mouseleave', () => {
			footer.style.backgroundColor = "";
		});

		
// Задача4
const itemElement = document.querySelector('.exercise-four__item');


function addIntervalToItem(element) {
	const delayTime = parseInt(itemElement.dataset.speed) || 2000;
	const maxCount = parseInt(itemElement.dataset.count) || 10;
	let i = 1;
	let timer = setInterval(() => {
		element.textContent = i;
		i === maxCount ? clearInterval(timer) : null;
		++i;
	}, delayTime)
}

// console.log(addIntervalToItem(itemElement))

//  з Подією скрол
window.addEventListener('scroll', windowScroll )
function windowScroll (event) {
	const elementTrue = itemElement.getBoundingClientRect().top - (window.innerHeight)
	// console.log(elementTrue)
	if (elementTrue <= 0) {
		itemElement.classList.add('rainbow')
	} else {
		itemElement.classList.remove('rainbow')
	}
	
}
//  з IntersectionObserver
const options = {
	root: null,
	rootMargin: `0px 0px 0px 0px`,
	threshold: 1,
}

let callback = (entries, observer) => {
	entries.forEach((entry) => {
		const targetElement = entry.target; 
		if(entry.isIntersecting) {
			targetElement.classList.add('animate')
			observer.unobserve(targetElement)
			addIntervalToItem(itemElement)
		} else {
			targetElement.classList.remove('animate')
		}
	})
}

let observer = new IntersectionObserver(callback, options);

const parentBlock = document.querySelector('.exercise-four__block-items');

observer.observe(parentBlock);

// ======= ДОМАШКА end=======

const heart = document.querySelector('.footer__heart');

window.addEventListener('scroll', (e) => {
	const heartElement = heart.getBoundingClientRect().top - window.innerHeight;
	if(heartElement <= 0) {
		heart.classList.add('show')
	} else {
		heart.classList.remove('show')
	}
	console.log(heartElement)
})


