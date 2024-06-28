"use strict";

let userAge = 27;
let userName = "Анастасія";
let userNickName = "Monashka";

let greeting = `Привіт всім, мене звати ${userName} і мені ${userAge} років`;
console.log(greeting);

console.log(greeting.length);

let someString = 'Мені 13-тий минало я пас ягнята за селом';
console.log(someString[0]);
console.log(someString.toLowerCase());
console.log(someString.toUpperCase());
console.log(someString.includes("13"));
console.log(someString.startsWith("М"));
console.log(someString.endsWith(" селом"));
console.log(someString.slice(0, 6));

let someString2 = '%Борис';
someString2 = someString2.replace("%", "");
console.log(someString2);
const paragraph = "You are beautiful";
console.log(paragraph.replace("beautiful", "incredible"));
const regex = /You/i;
console.log(paragraph.replace(regex, "We"));

let paragraph2 = "my name is Anastasiia";
paragraph2 = paragraph2.replace("Anastasiia", change());
console.log(paragraph2)

function change() {
  let name = "Anatoliy";
  return name;
}

let someNumber = 13.6;
console.log(Math.floor(someNumber));

let someNumber2 = 14.1;
console.log(Math.ceil(someNumber2));

let someNumber3 = 26.4;
console.log(Math.round(someNumber3));

let someNumber4 = -25;
console.log(Math.abs(someNumber4));

let randomNumber = Math.random() * 100;
console.log(Math.floor(randomNumber));

console.log(Math.max(someNumber, someNumber2, someNumber4));
console.log(Math.min(someNumber, someNumber2, someNumber4));

let someVar = '29.6px';
let result = parseInt(someVar);
console.log(result);
let result2 = parseFloat(someVar);
console.log(result2);


const num1 = "22";
const num2 = "2";
const res = +num1 + +num2;
console.log(res);
console.log(typeof res);

for (let i = 0; i < num1; i++) {
  console.log(i);
}


let userSurname = "Monakhova";

function doSomething() {
  let userSurname = "Khanas";
  console.log(userSurname);
}
doSomething();








