let firstNumber = prompt('Enter first number!');
let secondNumber = prompt('Enter first number!');


function choiceOfValue(a, b) {
    if (a < b) {
        result = -1;

    } else if (a > b) {
        result = 1;

    } else {
        result = 0;
    }
    alert(result);
    return result;
}

choiceOfValue(firstNumber, secondNumber);
