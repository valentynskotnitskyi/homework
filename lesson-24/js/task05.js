let even = 0;
let odd = 0;
let zero = 0;


for (let i = 0; i < 10; i++) {

  let number = Number(prompt("Write a number"));

  if (number === 0) {
    zero = zero + 1;

  } else if (number % 2 === 0) {
    even = even + 1;

  } else {
    odd = odd + 1;
  }
}

//console.log(`Even number: ${even}`);
//console.log(`Odd number: ${odd}`);
//console.log(`Zero number: ${zero}`);


document.write('Even number: ' + even + '<br>');
document.write('Odd number: ' + odd + '<br>');
document.write('Zero number: ' + zero + '<br>');