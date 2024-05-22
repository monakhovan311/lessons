'use string';
function burger() {
	let burger = document.querySelector(".menu-icon");
	let bodyHeader = document.querySelector(".body-header__block-list");
	let body = document.querySelector("body");

		burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		bodyHeader.classList.toggle("active");
		body.classList.toggle("lock");

	})
}
burger();