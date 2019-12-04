let result;
let question = false;

do {
    var num1 = Number(prompt('First nubmer?'));
    var num2 = Number(prompt('Second nubmer?'));
    var symbol = prompt('Write symbol /,*,-,+?');

    switch (symbol) {
        case "*":
            result = num1 * num2; break;
        case "/":
            result = num1 / num2; break;
        case "+":
            result = num1 + num2; break;
        case "-":
            result = num1 - num2; break;

        default:
            alert('Write true symbol!!!');
    }
    question = confirm('Result: ' + result + '. Try again?');
}
while (question === true);
