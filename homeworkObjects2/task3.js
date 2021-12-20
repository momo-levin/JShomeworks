let object = {
    a: 13,
    b: 12,
    c: 19,
    d: 123,
    e: 129,
    f: 98
}

function sumPrices(prices) {
    let pricesArr = Object.values(prices);
    let sumOfPrices = pricesArr.reduce((sum, item) => {
        return sum += item;
    })
    console.log(sumOfPrices);
}
sumPrices(object)