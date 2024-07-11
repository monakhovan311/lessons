
"use strict";
// ======= ДОМАШКА =======
// Задача №1
// Отримати в константу елемент <body>
const body = document.querySelector('body');
console.log(body);

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
const list = document.createElement('ul');
const addList = (item = 3) => {
  if(!Number(item)) return;
  let liElement;
  for (let i = 0; i < item; i++) {
    liElement = document.createElement('li');
    list.insertAdjacentElement('afterbegin', liElement);
  }
  body.insertAdjacentElement('afterbegin', list);
  console.log(list);
}
addList(4);

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.
body.classList.add('loaded');
if(body.classList.contains('loaded')) {
  body.style.color = "green";
}


// Задача №4(дивитись html)
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// const items = document.querySelectorAll('.item');
// items.forEach((element,index) => {
//   element.classList.add('active');
//   element.textContent = `Елемент №${index + 1}`
//   console.log(element);
// });


// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const page = document.querySelector('.page');
// const someText = document.createElement('div');
// someText.style.marginBottom = '2rem';
// function createTextItems (item) {
//   for(let i = 0; i < item; i++) {
//     const paragraph = document.createElement('p');
//     paragraph.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis iste vel harum, reiciendis ullam possimus explicabo ex quibusdam praesentium doloremque error. Error ut, accusantium quas quae eos unde laborum ex tempore recusandae, quis ratione. Corporis dolorem unde nostrum eaque nesciunt maiores? Similique in autem alias eligendi corrupti, assumenda maiores. Illum cumque fugiat dolor. Officia eum dolore obcaecati autem quisquam doloribus velit voluptates sit adipisci eligendi itaque aut, reprehenderit saepe assumenda omnis consequuntur quia totam dolorem? Placeat quo iste vel, sapiente aliquid nobis nam at ratione dicta porro alias doloremque? Ullam eligendi eveniet praesentium aperiam libero illum labore. Reiciendis, ea.'
//     someText.insertAdjacentElement('afterbegin', paragraph);
//   }
//   page.prepend(someText);
// }

// createTextItems(10)

// const button = document.createElement('button');
// button.textContent = 'Я кнопка'
// button.style.cssText = `
//   padding-block: 1rem;
//   padding-inline: 2rem;
//   background-color: #fff;
//   font-size: 2rem;
//   box-shadow: 1px 2px 0px black;
//   cursor: pointer;
// `
// page.append(button);

// const scrollToButton = button.getBoundingClientRect().top;
// window.scrollTo ({
//   top: scrollToButton,
//   left: 0,
//   behavior: "smooth",
// })

// Задача №6(дивитись html)
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Потім отримати значення aтрибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний
// const link = document.querySelector('.link');
// const getAttributeLink = +link.dataset.number;
// console.log(getAttributeLink)
// if(getAttributeLink < 200) {
//   link.style.color = "red";
// }
// ======= ДОМАШКА end=======




// Practice
// отримання ширини вікна браузера
// let windowWidth = window.innerWidth;
// console.log(windowWidth);
// // отримання висоти вікна браузера
// let windowHeight = window.innerHeight;
// console.log(windowHeight);
// let body = document.querySelector('body');
// if (windowWidth > 768) {
//   body.style.backgroundColor = "yellow";
// }

// console.log(navigator.userAgent);
// console.log(navigator.userAgentData.platform);
// console.log(navigator.userAgentData);
// console.log(navigator.userAgentData.mobile);
// if (!navigator.userAgentData.mobile) {
//   body.style.textTransform = "uppercase";
// }
// if (navigator.userAgent.includes("Chrome")) {
//   console.log('Це Хром');
// } else if (navigator.userAgent.includes("Firefox")) {
//   console.log('це Firefox');
// }

// if(navigator.userAgentData.platform.includes("Android")){
//   console.log('Це Android');
// } else if(navigator.userAgentData.platform.includes("macOS")){
//   console.log('Це macOS');
// }

// if(navigator.userAgentData.mobile) {
//   console.log('This is mobile version');
// } else if(!navigator.userAgentData.mobile) {
//   console.log('This is not mobile version');
// }

// console.log(location.href);
// console.log(location.hash);

// const cleanHash = location.hash.replace("#", "");
// console.log(cleanHash);

// let listLinks = document.querySelectorAll('.list__link');
// // console.log(listLinks.length);
// if (listLinks.lenght) {
//   console.log(listLinks);
// }
// location.href = "https://google.com";

// alert("Hello World");
// let question;
// let userName = prompt("Add you name..");
// if(userName === "" || userName === null) {
//   alert("Спробуйте ще раз");
// } else {
//   question = confirm(`${userName} do you like this lesson?`);
//   if(question === true) {
//     alert(` ${userName} ми дуже раді, що вам сподобалося`);
//   } else {
//     alert("Дякуємо за зворотній зв'язок! Ми будемо старатися краще!");
//   };
// }

// const htmlElement = document.documentElement;
// console.log(htmlElement);

// const headElement = document.head;
// console.log(headElement);

// const bodyElement = document.body;
// console.log(bodyElement);

// const listItemElement = document.querySelector(".list");
// const listItemFirstElement = listItemElement.firstElementChild;
// console.log(listItemFirstElement);

// const listItemLastElement = listItemElement.lastElementChild;
// console.log(listItemLastElement);

// const listChildren = listItemElement.children;
// console.log(listChildren);
// for (let i = 0; i < listChildren.length; i++) {
//   console.log(listChildren[i]);
// }

// for (let childNode of listChildren) {
//   console.log(childNode.textContent);
// }

// let someText = document.querySelector('.some-text');
// const previousSibling = someText.previousElementSibling;
// console.log(previousSibling);
// const nextSibling = someText.nextElementSibling;
// if(nextSibling !== null) {
//   console.log(nextSibling);
// } else {
//   console.log(`Значення дорівнює ${nextSibling}`);
// }

// const parentElement = someText.parentElement;
// console.log(parentElement.textContent);


// const listItem = document.querySelector('.list .list__item');
// console.log(listItem);

// const someObject = document.querySelectorAll('.list__item');
// console.log(someObject);

// someObject.forEach(someObject => {
//   someObject.style.color = 'red';
// });

// for(let i = 0; i < someObject.length; i++) {
//   console.log(someObject[i]);
// }

// for(let objects of someObject) {
//   console.log(objects)
// }


// const isParentElement = listItemElement.closest('.page');
// if(isParentElement) {
//   console.log(`Так, є`);
// } else {
//   console.log(`Ні, Немає`);
// }

// let listItems = document.querySelectorAll('.list__item');
// listItems.forEach((el, index) => {
//   // el.innerHTML = `<span>Індекс ${index}</span>`
//   console.log(el.textContent);
//   el.innerHTML = `<span>Hello</span>`
// });

// const someElement = document.querySelectorAll('p');
// console.log(someElement)
// someElement.forEach(el => {
//   el.innerHTML = `<div> new text </div>`;
//   el.style.color = 'blue';
// });

// someElement.forEach(el => {
//   console.log(el.textContent = "My name is Anastasiia");
// });

// const newElement = document.createElement('footer');
// newElement.className = "footer";
// newElement.innerHTML = `<div class="footer__container">
// <div class="footer__text">NEW</div></div>`
// console.log(newElement);
// const page = document.querySelector('.page');
// page.after(newElement);

// const page = document.querySelector('.page');
// let template = `<div class="block">`;
// if(page) {
//   template += `<span>Сторінка існує!</span>`
// }
// template += `</div>`
// console.log(template)
// page.innerHTML += template;
// page.before(template);


// page.insertAdjacentHTML('afterbegin', template);

// page.insertAdjacentText('beforebegin', template);
// const element = document.createElement('div');
// console.log(element);
// element.innerHTML = `<span>This is my new element</span>`;
// element.className = 'element';
// page.insertAdjacentElement('afterbegin', element);
// console.log(element.innerHTML);


// const listItem = document.querySelector('.list__item');
// console.log(listItem);
// page.insertAdjacentElement('beforebegin', listItem);

// const headerContainer = document.createElement('div');
// headerContainer.classList.add('header__container')
// console.log(headerContainer);

// const header = document.querySelector('.header');
// header.insertAdjacentElement('afterbegin', headerContainer);

// let headerContent = `<div class="header__content">`;
// if(header) {
//   headerContent +=`Header is true`;
// }
// headerContent += `</div>`;

// // headerContainer.innerHTML = headerContent;
// headerContainer.insertAdjacentHTML('afterbegin', headerContent);

// const cloneObj = header.cloneNode();
// console.log(cloneObj);
// const cloneAll = header.cloneNode(true);
// console.log(cloneAll);

// cloneObj.remove();
// const wrapper = document.querySelector('.wrapper');
// // wrapper.remove()

// wrapper.className = "new-wrapper";
// wrapper.classList.add('new-name');
// wrapper.classList.remove('new-wrapper');
// header.classList.toggle('active');
// console.log(header.classList.contains('header'));
// const isTrue = header.classList.contains('header');
// if(isTrue) {
//   console.log(`Такий класс існує`);
// } else {
//   console.log(`Такого немає`);
// }
// console.log(wrapper);
// console.log(wrapper.classList);

// const backgroundColor = 'yellow';
// const paddingBlock = '1.6rem';
// header.style.backgroundColor = `${backgroundColor}`;
// header.style.paddingBlock = `${paddingBlock}`;
// header.style.backgroundColor = ``;

// header.style.cssText = `
//         background-color: #2316;
//         font-size: 40px;
//         color:#fff;
// `

const text = "Привіт! Домашня робота у файлі script.js";
let template = ``;
function initText (text) {
  for (let i = 0; i < text.length; i++) {
    const item = text[i];
    template += `<span style="${item === ' ' ? `display:inline;` : ""} animation-delay: ${i * 0.1}s">
    ${item}</span>`;
  }
}

initText(text);
page.insertAdjacentHTML("afterbegin", template);

// const pageStyle = getComputedStyle(page);
// console.log(pageStyle);
// const backgroundPage = pageStyle.backgroundColor;
// console.log(backgroundPage);

// console.log(parseFloat(getComputedStyle(page).paddingBlock));

// const textAlign = pageStyle.textAlign;
// console.log(textAlign);

// const display = pageStyle.display;
// console.log(display);

// const checkAttribute = page.hasAttribute('title');
// console.log(checkAttribute);

// const getAttribute = page.getAttribute('title');
// console.log(getAttribute);

// const setAttribute = page.setAttribute('name','value');
// console.log(page);

// const removeAttribute = page.removeAttribute('name');
// const speed = parseFloat(page.dataset.speed) || 500;
// console.log(speed);
// const vasya = page.dataset.nameOne || "Tosha";
// console.log(vasya);

// console.log(page.tagName);
// if(page.tagName === "MAIN") {
//   console.log(`Це main`)
// }

// page.hidden = true;

// const windowWidth = window.innerWidth;
// console.log(windowWidth);
// const windowHeight = window.innerHeight;
// console.log(windowHeight);

// const mainElement = document.documentElement;
// console.log(mainElement);
// const windowClientWidth = mainElement.clientWidth;
// console.log(windowClientWidth);

// const windowClientHeight = mainElement.clientHeight;
// console.log(windowClientHeight);

// window.scrollTo ({
//   top: 1000,
//   left: 50,
//   behavior: "smooth"
// })
// const block = document.querySelector ('.block');
// function scrollToBlock () {
//   block.scrollIntoView ({
//     block:"start",
//     inline: "nearest",
//     behavior: "smooth"
//   })
// }

// scrollToBlock();

// const block = document.querySelector('.block');
// const blockElement = document.querySelector('.block__text');
// console.log(blockElement.offsetTop);
// console.log(blockElement.offsetLeft);

// console.log(blockElement.offsetParent);

// console.log(block.getBoundingClientRect().top);


// const block = document.querySelector('.block');
// const getBoundingClientRect = block.getBoundingClientRect().top;
// console.log(getBoundingClientRect);
// window.scrollTo ({
//   top: getBoundingClientRect,
//   left: 0,
//   behavior: "smooth"
// })