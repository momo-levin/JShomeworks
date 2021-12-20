let selfGeneratedUse = {
    getInfo() {
        let name = prompt('Введите имя:');
        if (name == '' || name == null) {
            alert('Действие отменено')
        } else {
            selfGeneratedUse.name = name;
        }
        let email = prompt('Введите email:');
        if (email == '' || email == null) {
            alert('Действие отменено')
        } else {
            selfGeneratedUse.email = email;
        }
        let phone = prompt('Введите телефон:');
        if (phone == '' || phone == null) {
            alert('Действие отменено')
        } else {
            selfGeneratedUse.phone = phone;
        }
    },
    introduce() {
        if (selfGeneratedUse.hasOwnProperty('name') == true) {
            console.log(this.name);
        }
        if (selfGeneratedUse.hasOwnProperty('email') == true) {
            console.log(this.email);
        }
        if (selfGeneratedUse.hasOwnProperty('phone') == true) {
            console.log(this.phone);
        }
    }
}
selfGeneratedUse.getInfo();
selfGeneratedUse.introduce();
