// теперь по массивам 
// задание 4 
var styles = ['Джаз', 'Блюз'];
console.log(styles); // ['Джаз', 'Блюз']
styles.push('Рок-н-ролл') 
console.log(styles); // ['Джаз', 'Блюз', 'Рок-н-ролл']
styles.splice(styles.length - 2, 1, 'Классика');
console.log(styles); // ['Джаз', 'Классика', 'Рок-н-ролл']
const styleFirst = styles.shift(); 
/* alert(styleFirst); */ // не выводил потому что опять же это окно будет появлятся, а выводит 'Джаз'
console.log(styles); // ['Классика', 'Рок-н-ролл']
styles.unshift('Рэп','Регги');
console.log(styles); // ['Рэп', 'Регги', 'Классика', 'Рок-н-ролл']
// кроме дз еще по приколу сделал остальные задачи по массивам из презы 
//задание 1
var arrString = ['Плыли', 'мы', 'по', 'морю', 'ветер', 'мачту', 'рвал'];
var resultArrString = arrString.map(item => {
    return item.length;
});
console.log(resultArrString); // [5, 2, 2, 4, 5, 5, 4]
// задание 2
var arrTask2 = ['Anna', 12, 'Sam', 9,  'Kate', 10, 'Ron', 9]; 
arrTask2.forEach (item => {
    if (typeof item === `string`) {
        console.log(item + ' - string'); 
    } else {                              
        console.log(item + ' - number')
    }                                   
})                                      
//Anna - string
//12 - number
//Sam - string
//9 - number
//Kate - string
//10 - number
//Ron - string
//9 - number
// задание 3
var arrTask3 = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21]; 
let resultArrTask3 = arrTask3.filter(item => {
        return item > 10;
})
console.log(resultArrTask3); // [67, 34, 50, 23, 11, 21]

// калькулятор 

var arrCalculator = [0];
function calculator() {
    for (let m = 0; m < Infinity; m++) {
        let l = prompt('Введите число: ');
        if (l == 15) {
            break;
        } else if (l === null || l === "") {
            alert('Действие отменено');
            break;
        } else {
            arrCalculator[m] = Number(l);
        }   
    };
    let sumOfArrCalculator = arrCalculator.reduce((sum, item) => {
        return sum + item;
    });
    console.log('Сумма введенных чисел: ' + sumOfArrCalculator)
}
calculator();
// ниже то же самое, только не работают esc и кнопка отмены 
// пытался еще сделать фильтрацию по вводимому контенту, но prompt возвращает строку и я не смог решить это 
// я хотел сделать так, чтобы если бы я написал рандомные буквы, то суммы не было бы, хотя это калькулятор не для цифр, а по сути вообще для всего
// т.к. в тз это не указано, так что пусть складывает и строки 
/* var arrCalculator = [0];
function calculator() {
    for (let m = 0; m < Infinity; m++) {
        let l = Number(prompt('Введите число: '));
        if (l != 15 === true) {
            arrCalculator[m] = l;
        } else {
            break;
        }
    };
    let sumOfArrCalculator = arrCalculator.reduce((sum, item) => {
        return sum + item;
    });
    console.log('Сумма введенных чисел: ' + sumOfArrCalculator)
}
calculator(); */


