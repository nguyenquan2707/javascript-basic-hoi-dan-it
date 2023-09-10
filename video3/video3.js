// Hàm có async này trở thành promise
const getNewToDo = async() => {

    
    //promis pending nghĩa là code đã xong rồi, mà promis vẩn chưa trả ra kết quả.như vậy gọi là pending,
    //bởi vì javascript là bất đồng bộ, nếu mình không nói với nó là mày phải chờ tao, thì để nói với javascript 
    //rằng mày phải chờ tao, thì js có tứ await, nghĩa là chờ tao nha.
    // let data = fetch('https://jsonplaceholder.typicode.com/todos/1') ////https://ibb.co/V2JqWpK
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')//chờ tao lấy data
    console.log(`Data = `, response);
    console.log(`Data json = `, await response.json()); //Bởi vì json() cũng trả ra promis nên phải thêm await
}
// Promise, code này chờ để chạy, mình phải làm gì để cho promise này không còn promise nữa.
console.log(getNewToDo());