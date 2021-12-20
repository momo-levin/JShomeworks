function isEmpty(obj) {
    for( let key in obj) {
        return false;
    }
    return true;
}
let aboba = {
}
console.log(isEmpty(aboba));  // true