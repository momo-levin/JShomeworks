// на switch
function convertType1(value, toType) {
    switch (toType) {
        case "boolean":
            return Boolean(value);
        case "number":
            return Number(value);
        case "string":
            return String(value);
        default:
            console.log("Такого типа данных нет");
    }
}
console.log(convertType1(10, "string"));

// expression 
let convertType2 = function(value, toType) {
    if (toType === "boolean") {
        return Boolean(value);
    } else if (toType === "number") {
        return Number(value);
    } else if (toType === "string") {
        return String(value);
    }
}
console.log(convertType2(true, "number"));

// стрелочная

let convertType3 = ((value, toType) => {
    if (toType === "boolean") {
        return Boolean(value);
    } else if (toType === "number") {
        return Number(value);
    } else if (toType === "string") {
        return String(value);
    }
})

console.log(convertType3(1, "boolean"));