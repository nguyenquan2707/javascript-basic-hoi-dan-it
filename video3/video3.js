const promisesTest = () => {

    return new Promise((resolve, reject) => {
        resolve(`Hi....`);
        // reject('Network low.....')
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

function testPromise() {

    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              //JSON test
            // document.getElementById("demo").innerHTML = JSON.parse(this.responseText).title;

            const data = JSON.parse(xhttp.responseText);
            resolve(data);
          } else if (this.readyState == 4 && this.status != 200){
            reject(`Something wrong....`);
              console.log(xhttp.status);
          }
        };

        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
        xhttp.send();
    });
  }

  
  // Chainning promise
  testPromise().then((data) => {
    console.log(`Data1`, data);
    return testPromise();
  }).then((data2) => {
    console.log(`Data2`, data2);
  }).catch((reject) => {
    console.log(`reject=`, reject);
  })