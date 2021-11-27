// задание 1
let num = 0;
while (num < 51) {
    console.log(num);  // выводит числа от 0 до 50
    num++;
}
// задание 2
for (let a = 0; a < 101; a++) {
    if (a % 2 === 0) {
        console.log(a);  // выводит все четные числа от 0 до 100 
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
    console.log('sum: ' + sum);  // вот для модального окна alert('sum: ' + sum); п
};                               // просто при любом обновлении оно бы появлялось
ArrSum();                        // в итоге выведет sum: 210

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
    console.log('2 в степени 8 = ' + c);  // выведет 2 в степени 8 = 256
};
degree();
// задание 5 
// возможно можно было сделать как-то легче, и я гуглил, но ничего не понял из того, что там предлагают 
function largestDigit(number) {
    number = String(number);
    numberArr = Array.from(number);
    numberArr.forEach(item => {
        return item = Number(item);
    });
    console.log(Math.max.apply(0, numberArr));  // вернет 8
}
largestDigit(37142384000000000008872n); 

// это то, что можно загуглить 
// но я чутка не понял, как оно работает, и сделал какой-то костыль, который тоже работает 
/* function maxDigit(k){
    if(k == 0){ return 0;}
    else{
      return Math.max(k % 10, maxDigit(Math.floor(k / 10)));
    }
  }
  console.log(maxDigit(16984)); */








