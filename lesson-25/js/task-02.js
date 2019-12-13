// let number = Number(prompt("Enter a number "));

function perfectNumber(number) {

    let divisor = 0;
    let sumDivisor = 0;


    for (let i = number; i > 0; i--) {

        if (number % i === 0 || i === 1) {

            divisor = i;

            console.log(divisor);
            sumDivisor = sumDivisor + divisor
        }
    }

    console.log(sumDivisor);

    if (number === (sumDivisor - number)) {
        result = true;

    } else {
        result = false;
    }

    console.log(result);
    return result;

}

perfectNumber(64);