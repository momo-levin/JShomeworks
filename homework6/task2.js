"use strict"
const formSubmit = (e) => {
    let formElem = e.target.elements;
    formElem['input'].value = 'Ванечка, а тебя никто не спрашивает'; 
    console.log(formElem['input'].value);
    let btn = formElem['submit'];
    e.target.reset();
    btn.disabled = true;
    e.preventDefault();
    
}
document.getElementById('formSecond').addEventListener('submit', formSubmit)