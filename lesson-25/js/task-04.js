function getFactorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * getFactorial(n - 1);
}

getFactorial(10);