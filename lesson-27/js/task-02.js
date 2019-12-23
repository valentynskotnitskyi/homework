// let lifes = 100;

// let demages = [4, 8, 12, 5];

// function restOfLifes(arr, start) {
//     let result = arr.reduce(function (accum, currentItem) {
//         return accum - currentItem;
//     }, start);

//     return result;
// };

// restOfLifes(demages, lifes);

let numba = 3;

let numActions = [
    (num) => { return num + 1 },
    (num) => { return num * num },
    (num) => { return num - 2 },
];

let result;

let firstFn = numActions[0];
result = firstFn(numba);

console.log(result);

let secondFn = numActions[1];
result = secondFn(result);

console.log(result);

let thirdFn = numActions[2];
result = thirdFn(result);

console.log(result);

// function transform(value, actions) {

//     return arr.reduce(function (accum, currentItem) {
//         console.log(accum(currentItem));
//         return accum(currentItem)
//     }, num);

// }

// transform(numba, numActions);

