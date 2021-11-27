// задание 1
let num = 0;
while (num < 51) {
    console.log(num);
    num++;
}
// задание 2
for (let a = 0; a < 101; a++) {
    if (a % 2 === 0) {
        console.log(a);
    }
}
// задание 3
// для начала создадим массив из 20 элементов 
var newArrFirst = [];
for (var b = 0; b < 21; b++) {
    newArrFirst[b] = b;
}
// далее сложим все числа в массиве
function ArrSum() {
    var sum = 0;
    for (b = 0; b < newArrFirst.length; b++) {
        sum += newArrFirst[b];
    }
    console.log('sum: ' + sum);  // вот для модального окна alert('sum: ' + sum);
};                               // просто при любом обновлении оно бы появлялось
ArrSum();

// по мне лучше так, как снизу, но домашка по циклам(
/* function ArrSum() {
    let arrFirstSum = newArrFirst.reduce((sum, item) => {
        return sum + item;
    });
    console.log('sum: ' + arrFirstSum);  // вот для модального окна alert('sum: ' + arrFirstSum); 
};                                       // просто при любом обновлении оно бы появлялось        
ArrSum(); */
// задание 4
function degree() {
    var c = 2;
    for (let f = 1; f < 8; f++) {
        c *= 2;
    }
    console.log(2 + ' в степени 8 = ' + c);
};
degree();
// задание 5 не знаю как 








