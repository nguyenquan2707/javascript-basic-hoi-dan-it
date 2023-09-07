console.log(`A bc `);

let a = {}

//Khai báo gồm key và value
//Key ko nên có dấu cách

let person = {
    name: "Quan",
    address: "Hcm",
    methodTest: () => {
        console.log("Hi...");
        return `Hi`;
    }
}

console.log("type of a = " , typeof a);
console.log("name =  " , person.name);
// https://www.youtube.com/watch?v=xEBkBJDgAY4&list=PLncHg6Kn2JT5dfQqpVtfNYvv3EBVHHVKo&index=12
// Cách này lợi thế hơn
console.log("Hoặc truy cập name bằng " , person['name']);
const test = person.methodTest();
console.log(test);