'use strict'
let obj = {
    name: 'кетчуп',
    age: 12,
    sayIntro() {
        console.log(`Меня зовут ${this.name} и мне ${this.age} лет`);
    }
};

obj.sayIntro();
for(let key in obj) {
    console.log(key);
    console.log(obj[key])
}