let css = [
    { name: 'width', value: '300px' },
    { name: 'color', value: 'red' },
    { name: 'text-align', value: 'justify' },
    { name: 'font-style', value: 'italic' },
];

function transformListToStyle(arr) {
    return arr.reduce(function (accum, item) {
        return accum + `${item.name}: ${item.value}; `
    }, '');
}

let result = transformListToStyle(css);

document.write(result);


// let list = [1, 2, 3];

// function getSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }

//     return sum;
// }

// function getSumForEach(arr) {
//     let sum = 0;
//     arr.forEach(function (item, index) {
//         sum = sum + item;
//     });

//     return sum;
// }

// function getSumReduce(arr) {
//     arr.reduce(function (sum, item) {
//         return sum + item;
//     }, 0);

//     return result;
// }

// let sum = getSumForEach(list);