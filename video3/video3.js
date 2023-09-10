console.log(`A bc `);
//functions
let sum = (first, second, callback) => {
    let result = first + second;
    //callback là sau khi thực hiện một số việc, và sau đó callback sẽ dc thực hiện
    callback(result);
}

let printSum = (result) => {
    console.log(`Result = `, result);
}

//Call sum
sum(1, 2, printSum);
