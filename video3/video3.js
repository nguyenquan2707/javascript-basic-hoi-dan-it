/*const getNewToDo = async() => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1ssss')
    // console.log(`>>> check response = `, response);
    if(response && response.status !== 200) {
        // Lưu ý: 
        //nếu return thì nó vào then return new Error(`Something wrong with status = ` + response.status);
        //dùng throw thì nó vào catch.
        throw new Error(`Something wrong with status = ` + response.status);
    }
    let data = await response.json();
    return data;
}*/

/** Try catch way */

const getNewToDo = async() => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1ssss')
        if(response && response.status !== 200) {
            throw new Error(`Something wrong with status = ` + response.status);
        }
        let data = await response.json();
        return data;
    } catch(error) {
        console.log(`error====`,error.message);
    }
}

getNewToDo().then((data) => {
    console.log(`data = `, data);
}).catch((reject) => {
    console.log(`reject =` + reject.message);
})