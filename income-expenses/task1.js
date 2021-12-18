'use strict'
let arrSum = [0];
let incomeSum = [0];
let consumption = [0];
const outcomeMoney = (e) => {
    let outcome = document.getElementById('outcome');
    let column1 = document.getElementById('column1');
    let column2 = document.getElementById('column2');
    let column1Value = document.getElementById('column1Value')
    let column2Value = document.getElementById('column2Value')
    let formElem = e.target.elements;
    let x = formElem['moneyValue'].value;
    if (formElem[1].checked == true) { 
        arrSum.push(Number(x));
        incomeSum.push(Number(x));
    } else if (formElem[2].checked == true ) {
        arrSum.push(Number(-x));
        consumption.push(Number(x));
    }
    let sum = arrSum.reduce((sum, item) => {
        return sum += item
    });
    let income = incomeSum.reduce((sum, item) => {
        return sum += item;
    })
    let consum = consumption.reduce((sum, item) => {
        return sum += item;
    })
    outcome.innerText = sum + '$';   
    column1.style.height = income + "px";
    column1Value.innerText = income + '$';   
    column2.style.height = consum + 'px';
    column2Value.innerText = consum + '$'; 
    e.target.reset();
    e.preventDefault();
}

document.getElementById('formMoney').addEventListener('submit', outcomeMoney)