function transformArray (arr, index1, index2, adding) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    for(a = 0; a < arr.length; a++) {
       arr[a] = arr[a].concat(adding);
    }
    console.log(arr);
}
let arr2 = ["fngp", "kgei", "fpos", "clfw"];
transformArray(arr2, 1, 2, "green");