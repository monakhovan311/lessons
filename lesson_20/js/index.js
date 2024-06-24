'use string';
function burger() {
	let burger = document.querySelector(".header__burger");
	let bodyHeader = document.querySelector(".header__menu");
	let body = document.querySelector("body");

		burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		bodyHeader.classList.toggle("active");
		body.classList.toggle("lock");

	});
}
burger();
