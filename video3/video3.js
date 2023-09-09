console.log(`A bc `);
//functions
let sum = (first, second) => first + second;

console.log(`sum = `, sum(2,1));

let person = {
    name: "Q",
    address: "TV",
    //methods
    getName: function() {
        return this.name;
    }
}

console.log(person.getName());