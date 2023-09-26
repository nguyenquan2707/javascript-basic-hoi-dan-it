let myArray = [1, 2, 3, 4, 5];


//Create new map
let mapArray = myArray.map((value, index) => {
    console.log(`index`, index);
    return value * 2;
});
console.log(mapArray);
let mapArray2 = myArray.map((value, index, array) => {
    return value * 2;
});

console.log(mapArray2);