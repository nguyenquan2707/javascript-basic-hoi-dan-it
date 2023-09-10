console.log(`A bc `);
//đồng bộ là chạy thứ tự từng dòng từ trên xuống dưới.

//Async là xữ lý không cần thứ tự, có dòng done trước, có dòng done sau.
//Nhưng vẩn đảm bảo là đầu ra chính xác.

//https://jsonplaceholder.typicode.com/todos/1

console.log(1);
console.log(2);
//sleep
setTimeout(() => {
    console.log(`run after 3s`);
    
}, 3000); //3s
console.log(4);