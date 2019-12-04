//task-01
let age = Number(prompt("How old are you?"));

if (age >= 0 && age <= 12) {

    alert("You are a child");

} else if (age > 12 && age <= 18) {

    alert("You are a teenager");

} else if (age > 18 && age <= 60) {

    alert("You are an adult");
} else {

    alert("You are a retiree");
}

//task-02
let getNumber = Number(prompt("Write number from 0 to 9 "));

switch (getNumber) {
    case 0:
        console.log(')');
        break;
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log('(');
        break;
    default:
        ('try again');
}


