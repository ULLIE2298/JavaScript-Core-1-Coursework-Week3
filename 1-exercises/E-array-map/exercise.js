// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiple1(num) {
    return num * 100;
}
var multipleNumber1 = numbers.map(multiple1);
console.log(multipleNumber1);

var multipleNumber2 = numbers.map(function multiple2(num) {return num * 100});
console.log(multipleNumber2);

var multipleNumber3 = number.map(function(num) {return num * 100});
console.log(multipleNumber3)

var multipleNumber4 = numbers.map(num => {return num * 100});
console.log(multipleNumber4)

var multipleNumber5 = numbers.map( num => num * 100);
console.log(multipleNumber5);