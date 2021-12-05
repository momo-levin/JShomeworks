n = 12312313;
var sum = 0;
n = String(n);
nArr = Array.from(n);
nArr.forEach(item => {
return item = Number(item);
})
for(i = 0; i < nArr.length; i++) {
    sum += +nArr[i];
}
console.log(sum)
n = sum;
console.log(n);