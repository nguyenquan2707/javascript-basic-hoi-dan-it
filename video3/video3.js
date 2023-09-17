var numbers = [1, 2, 3, 4];

var listOfNumbers = '';

_.each(numbers, function(x) { listOfNumbers += x + ' ' });

console.log(listOfNumbers);

// chunk
var numbers2 = [1, 2, 3, 4];
var listOfNumbers2 = '';

listOfNumbers2 = _.chunk(numbers2, 2);
console.log(listOfNumbers2);