'use strict'
const showWindow = (e) => {
    document.getElementsByClassName('modalWindow')[0].classList.toggle('none');
}
document.getElementById('addPerson').addEventListener('click', showWindow);


const subForm = (e) => {
    let formEl = document.forms[0].elements;
    if (formEl['name'].value == '') {
        formEl['name'].focus();
        e.preventDefault();
    } else {
        if (formEl['age'].value == '') {
            formEl['age'].focus();
            e.preventDefault();
        } else if (formEl['age'].value < 18) {
            alert('Пшел вон'); 
            document.forms[0].reset();
            e.preventDefault();
            document.getElementsByClassName('modalWindow')[0].classList.toggle('none');
        } else {
            let div1 = document.createElement('div');
            div1.style.background = 'wheat';
            div1.style.width = '20%';
            div1.style.padding = '10px';
            div1.style.fontSize = '15px'
            div1.style.marginBottom = '8px'
            document.body.appendChild(div1);
            let mes1 = document.createElement('p');
            mes1.innerText = 'Имя: ' + formEl['name'].value;
            mes1.style.fontSize = '25px'
            div1.appendChild(mes1);
            let mes2 = document.createElement('p');
            mes2.innerText = 'Возраст: ' + formEl['age'].value;
            mes2.style.fontSize = '25px'
            div1.appendChild(mes2);
            document.forms[0].reset();
            e.preventDefault();
            document.getElementsByClassName('modalWindow')[0].classList.toggle('none');
        }
    }
}
document.getElementById('submit').addEventListener('click', subForm);


const cancelForm = (e) => {
    document.forms[0].reset();
    e.preventDefault();
    document.getElementsByClassName('modalWindow')[0].classList.toggle('none');
}
document.getElementById('cancel').addEventListener('click', cancelForm);


