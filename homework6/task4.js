'use strict'
const subForm = (e) => {
    let elemForm = e.target.elements;
    let inp = elemForm['input'];
    if (inp.value == '') {
        inp.focus();
    } else {
        console.log(inp.value)
        elemForm['button'].disabled = true;
    }
    e.target.reset();
    e.preventDefault();
}
document.getElementById('formFourth').addEventListener('submit', subForm)