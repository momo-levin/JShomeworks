function strangeSum(n){
    do{
        var sum = 0;
        n = String(n);
        nArr = Array.from(n);
        nArr.forEach(item => {
        return item = Number(item);
        })
        for(i = 0; i < nArr.length; i++) {
            sum += +nArr[i];
        }
        n = sum;
    } while (sum > 9)
    console.log(n)
}
strangeSum(34134); // 
//или оставляй нормальный комментарий,или никакого
