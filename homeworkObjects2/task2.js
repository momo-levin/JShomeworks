'use strict'
console.log(Array.from(document.getElementsByTagName('li')).map((elem, number) => number + 1 + '.' + elem.innerText ));