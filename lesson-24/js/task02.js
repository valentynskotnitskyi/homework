//task-02
var a = Number(prompt('first number'));
var b = Number(prompt('second number'));

/*if (a>b) {
    diviser = b
}
else {diviser = a};*/

var d = (a > b ? b : a);

//if (a % d === 0 && b % d === 0);

while (a >= 1 && b >= 1) {
    if (a % d === 0 && b % d === 0) {
        break;
    }
    d = d - 1;
};

alert(d);


