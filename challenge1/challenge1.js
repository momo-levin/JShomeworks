function largestDigit(arr)  {
    console.log(Math.max.apply(0, arr));
};
var newArr = [1, 2, 4, 5 ,76, 564, 34, 34, 48];
largestDigit(newArr);