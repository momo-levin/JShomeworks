'use strict'
document.getElementById('phoneNumber').setAttribute('maxlength', "13");
const submitFormFifth = (e) => {
    let elemForm = e.target.elements;
    
    let obj = { //сделай деструктуризацию
        name: elemForm['name'].value,
        surname: elemForm['surname'].value,
        phoneNumber: elemForm['phoneNumber'].value,
        message: elemForm['message'].value
    }
    console.log(obj);
    e.target.reset();
    elemForm['submit'].disabled = true;
    e.preventDefault();
}
document.getElementById("formFifth").addEventListener('submit', submitFormFifth);
