
"use strict";
// ======= ДОМАШКА =======


//* Задача 1
//? Що потрапить в консоль?

let someVar = 0;
++someVar;

if (someVar) {
  console.log(someVar);
}

//! Відповідь:
// Інкремент збільшує значення змінної на 1. У консоль потрапить значення 1



//*Задача 2
//? За допомогою циклу FOR виведіть в консоль 10 рядків:

for(let i = 0; i < 10; i++) {
  console.log(`Пункт №${i}`);
}


//*Задача 3
//? Що потрапить в консоль ?

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
  console.log('000');
}


//! Відповідь:
// 1. 2 * 20 <= 10
// 40 <= 10
// Весь вираз = false

/* 2. 30 / 2 < 5 && 10 <= "10" :
  15 < 5 && 10 <= "10"
  false && 10 <= "10"
  false && 10 <= 10
  false && true


  3. 20 === "20"
  Оператор сурового порівняння не змінює типи данних і тому результат виразу буде false


  Тепер логічні оператори:
  1. false || false && true || false
  Далі виконаєтсья логічний оператор && і він поверне false
  Результат:
  false || false || false 
  Вся умова поверне false і тому у консолі нічого не буде
  */



  //* Задача 4
  //? Що потрапить в консоль?
  // Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: " Викличте функцію передаючи різні значення, у тому числі не передаючи зовсім. Функція не має повертати NaN, Infinite або помилку


  let calcNum = (a = 10, b = 2) => a / b;
  function showMessage (calcNum) {
    let result;
    if (Number.isNaN(calcNum) || calcNum === Infinity) {
      console.log('Спробуй ще раз');
    } else {
      result = `Результат ділення: ${calcNum}`;
      console.log(result);
    }
  }

  showMessage(calcNum("string", 2));



  //* Задача 5
  /* Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль */

const someArr = ['hello', 25, true, 10, undefined];
let newArr = someArr.forEach((item) => {
  item === 10 ? console.log(item) : null;
});

for ( let i = 0; i < someArr.length; i++) {
  if (someArr[i] === 10) {
    console.log(someArr[i]);
  };
};
// ======= ДОМАШКА end=======




// Practice
let result1 = 6 === "6";
console.log(result1);

let result2 = !5;
console.log(result2);

let result3 = "" || 10 || false || true;
console.log(result3);

let result4 = " " && 33 && 'string' && 22 && undefined;
console.log(result4);

let varOne = 200;
let varTwo = '22';

if (varOne > varTwo) {
  let result = varOne - varTwo;
  console.log(result);
} else if (varOne === 20) {
  alert(`varOne = ${varOne}`)
} else {
  alert ("Спробуй ще!");
}

let userName;
let userSurname;
let userInfo = userName !== undefined ? userName : userSurname !== undefined ? userSurname : 'anonim';
console.log(userInfo);

let userAge = 18;
let drink = userAge >= 18 ? 'vodka' : 'milk';
console.log(drink);


let array = ['Anastasi', 27, false, null];
console.log(array.length);
console.log(array[2]);
array[2] = true;
console.log(array[2]);
array.forEach((item, index) => {
  console.log(item, index);
});

array.push("love");
array.pop();
array.unshift(24);
array.shift();
console.log(array);
console.log(array.includes("Anastasi"));

if (!array.includes("newValue")) {
  array.push("newValue");
  console.log(array);
}

console.log(Array.isArray(array));

let someString = array.join(' ');
console.log(typeof someString);

let arrTwo = [8, 22, 1];
console.log(arrTwo.sort());
function compareNumeric(a, b) {
	console.log(`Порівнюємо ${a} і ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;

	return a - b;
}
console.log(arrTwo.sort(compareNumeric));


const someObj = {
  age: 27,
  name: 'Anastasiia',
  surname: 'Monakhova',
};
console.log(someObj);


const firstNum = 25;
const secondNum = 16;

function showNumber (num) {
  console.log(num);
}

function calcNumber (a, b, c = 10) {
  let result = a + b + c;
  showNumber(result);
}
calcNumber(firstNum, secondNum);


let someText = "";
someText += `<div>`;
someText += `<a href = "contacts.html"></a>`;
someText += `</div>`;
console.log(someText);


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

const page = document.querySelector('.page');
page.insertAdjacentHTML("beforeend", template);