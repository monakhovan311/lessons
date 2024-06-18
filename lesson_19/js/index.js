'use string';
function burger() {
	let burger = document.querySelector(".action-top-header__burger");
	let bodyHeader = document.querySelector(".top-header__menu-body");
	let body = document.querySelector("body");

		burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		bodyHeader.classList.toggle("active");
		body.classList.toggle("lock");

	});
}
burger();

function search() {
	let button = document.querySelector(".top-header__icon");
	let searchBlock = document.querySelector(".search-top-header");

		button.addEventListener("click", () => {
		button.classList.toggle("open");
		searchBlock.classList.toggle("open");
	});
}

search();