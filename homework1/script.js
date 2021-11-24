console.log('Задание 1-2')

// Задание 1

let a = 5; 
let b = 10; 
console.log(a, b);
let c;
c = a;
a = b; 
b = c; 
console.log(a, b);

/* [a, b] = [b, a];
console.log(a, b); */

// Задание 2

newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let d = newArray[2] + newArray[3] + newArray[4];
console.log(d);

console.log('Задание 3')

// Задание 3

function myFunc() {
    let a = 5; 
    let b = 10; 
    console.log(a, b);
    let c;
    c = a;
    a = b; 
    b = c; 
    console.log(a, b);
    newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let d = newArray[2] + newArray[3] + newArray[4];
    console.log(d);
    let myObj = {
        a: a,
        b: b,
        sum: d,
    }
    console.log(myObj);
}

myFunc();