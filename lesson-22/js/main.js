/*let daysInYear = 365;
let hoursInDay = 24;
let hoursInYear = daysInYear * hoursInDay * 3;
console.log(hoursInYear);
let answer = prompt("How mucha?");
console.log(answer * hoursInYear);*/

//task-01
let name = prompt("Введіть імя");
alert("Привіт " + name);

//task-02
const dateYear = (2019);
dateYear === NaN;
let yearsOld = prompt("Введіть рік свого народження");
yearsOld === NaN;
alert("Тобто Вам " + (dateYear - yearsOld) + " років!?");

//task-03
let squareSide = parseInt(prompt('Enter lenght of a square.'));
alert("Square's erimeter is" + ' ' + squareSide * 4);

//task-04
const pi = 3.14;
let radius = parseInt(prompt('Enter radius'));
let circleSquare = pi * Math.pow(radius, 2);
alert("Circle Square is" + ' ' + circleSquare);

//task-05
let distance = parseInt(prompt('Enter the distance between 2 towns, km.'));
let time = parseInt(prompt('Enter time you want to get there, hours.'));

let speed = Math.round(distance / time);
alert('You have to ride with speed ' + speed + ' km/h');

//task 06
const exRate = 0.87

let dollar = parseInt(prompt('How many dollars do you have?'));
let euro = alert('you can get ' + (exRate * dollar) + 'euro instaed of your ' + dollar + 'usd');

//task-07
const fileSize = 820;
let flash = parseInt(prompt('Enter Gb'));
let flashMemory = flash * 1024;

let quontity = Math.floor(flashMemory / fileSize);
alert(quontity);

//task-08
let money = parseInt(prompt('Money amount'));
let price = parseInt(prompt('Chocolate price'));

let pcs = Math.floor(money / price);
let change = money - (pcs * price);
alert(change);

//task-09
let number = prompt('enter number from 100 to 999');
let numberFirst = number % 10;
let numberFirst1 = Math.floor(number / 10);;
let numberSecond = numberFirst1 % 10;
let numberThird = Math.floor(numberFirst1 / 10);

let reverse = numberFirst * 100 + numberSecond * 10 + numberThird; console.log(reverse);

// task-10
let depositAmount = parseInt(prompt('Depsit amount'));
const depositDayQty = 60;
const percent = 0.05;
const dayInYear = 365;

let profit = depositAmount * percent / dayInYear * depositDayQty;
alert("Your profit for 2 month: " + profit);

/*let a = prompt("What is it  time now?");
if (a > 7) {
    alert("Go home! You are late!")
}
if (a < 7) {
    alert("You must wate!")
}
else (a = 7)
alert("Welcome!");*/

/*let a = Number(prompt('Введіть перше число'));
let symbol = (prompt('Введіть дію: +, -, *, /'));
let b = Number(prompt('Введіть друге число'));
let c;

if (symbol === '+') {
    c = a + b;
}
if (symbol === '-') {
    c = a - b;
}
if (symbol === '*') {
    c = a * b;
}
if (symbol === '/') {
    c = a / b;
};

alert(c);*/






