function convertFloor(floor) {
    if (floor >= 0 && floor < 13) {
        floor++;
        console.log(floor);
    } else if (floor == 13) {
        console.log("Такого этажа не существует");
    } else {
        console.log(floor);
    }
}
convertFloor(-2);
convertFloor(-1);
convertFloor(0);
convertFloor(1);
convertFloor(2);
convertFloor(12);
convertFloor(13);
convertFloor(14);
convertFloor(15);