console.log(`A bc `);

function testFunc(first, second, third) {
    console.log(`first=`, first);

    if(second == 2) return;

    console.log(`second=`, second);

    return first + second;
}

console.log("sum=", testFunc(1,1));
console.log("sum=", testFunc(1,2));
