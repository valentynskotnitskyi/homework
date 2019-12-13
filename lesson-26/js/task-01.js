let numba1 = {
    top: 1,
    bottom: 5,
}

let numba2 = {
    top: 3,
    bottom: 4,
}

function sumNumbas(a, b) {
    let result = a.top / a.bottom + b.top / b.bottom;
    return result;
}


function divisionNumbas(a, b) {
    let result = (a.top / a.bottom) / (b.top / b.bottom);
    return result;
}

function subtractNumbas(a, b) {
    result = (a.top / a.bottom) - (b.top / b.bottom);
    return result;
}

function multiplyNumbas(a, b) {
    result = (a.top / a.bottom) * (b.top / b.bottom);
    return result;
}

console.log(sumNumbas(numba1, numba2));
console.log(divisionNumbas(numba1, numba2));
console.log(subtractNumbas(numba1, numba2));
console.log(multiplyNumbas(numba1, numba2));