//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const array1 = [1, 30, 4, 21, 100000];
array1.sort((first, second) => {
    return first - second;
});

console.log(array1);

const months = ['March', 'Jan', 'Feb', 'December'];

months.sort((firstElement, secondElement) => {
    return firstElement.length - secondElement.length;
});
console.log(months);


const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  items.sort((a, b) => a.value - b.value);

  console.log(items);