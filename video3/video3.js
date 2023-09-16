console.log(`A bc `);

let a = {
    name: "Q",
    age: 35
}

console.log(a);

let b = ["A", "B", "C"];

console.log(`type of b = `, typeof b, b); //https://ibb.co/D8BrtT3

// https://ibb.co/9y4QRmD

console.log(b[0]);

let customers = [
    {
        name: "A",
        age: 23
    },
    {
        name: "B",
        age: 22
    }
];

console.log(customers.length);


b.push("D");
console.log(`b=`, b);

// 
let words = ['Quan', 'Tra', 'An', 'A', 'Nguyen'];
let results = words.filter((element, index) => {
    console.log(`${index} : ${element}`);
    return index % 2 == 0;
});

console.log(results);

// 
let employees = [
    {name: "Q", age: 35},
    {name: "T", age: 34},
    {name: "A", age: 20},
    {name: "AA", age: 25},
];

let filterdEmployees = employees.filter((element, index) => {
    return element.age > 25;
});

console.log(filterdEmployees);