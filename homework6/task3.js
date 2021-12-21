"use strict"
let checkbox1 = document.getElementById('checkbox1');//не делай так больше
const submitThirdForm = (e) => {
    let elemForm = e.target.elements;
    console.log(elemForm['input'].value)
    //что за славный комментарий?
    /* if (elemForm['checkbox1'].checked = true) {
        console.log(elemForm['checkbox1'].name)
    } */
    e.target.reset();
    elemForm['submit'].disabled = true;
    e.preventDefault();
}
document.getElementById('formThird').addEventListener('submit', submitThirdForm)
