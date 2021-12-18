'use strict'

const btnSubmit = (e) => {
    let formElements = e.target.elements;
    console.log('Name: ' + formElements['name'].value);
    console.log('Surname: ' + formElements['surname'].value)
    e.target.reset();
    formElements['submit'].disabled = true;
    e.preventDefault();
}
document.getElementById("formFirst").addEventListener('submit', btnSubmit);