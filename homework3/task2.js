
function pow(x, n) {
    let c = x;
    for(a = 1; a < n; a++) {
        if (n > 0 && n % parseInt(n) === 0) {
            c *= x;
        } else {
            console.log("Возводят только в натуральное число")
            break;
        }   
    }
    console.log(c);
}
pow(5, 5);