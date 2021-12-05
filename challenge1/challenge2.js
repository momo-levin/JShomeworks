
function fib(n) {
    const result = [0, 1];
    for (var i = 2; i < n; i++) {
      result.push(result[i -1] + result[i - 2]);
    }
    return result;
}
console.log(fib(10016785));