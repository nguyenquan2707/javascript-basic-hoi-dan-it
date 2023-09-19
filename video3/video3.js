const promisesTest = () => {

    return new Promise((resolve, reject) => {
        // resolve(`Hi....`);
        reject('Network low.....')
    });
};

//Promis thi trả về hoặc data hoặc error
//Muốn lấy data thì dùng then function
//Muốn lấy error thì dùng catch function
promisesTest().then((data) => {
    console.log(data);
}).catch((reject) => {
    console.log(reject);
})