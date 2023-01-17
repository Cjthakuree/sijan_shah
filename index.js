// let value = "Sijan Shah"
// console.log(value);

// value = "iims"
// console.log(value);

// const value = "Happy"
// console.log(value);

// value = "Sad"
// console.log(value);

// value = "1"
// console.log(typeof value);

// let students = ['ram', 'shyam', 'hari'];
// console.log(students);

let students = ['ram', 'shyam', 'hari'];
console.log('first value of array:',students[0]);
students[0] = 'iims';
console.log('first value of array after updating is:',students[0]);
// console.log('last value of array:',students[2]);

console.log('The length of the array is:',students.length);
console.log('The last item of the array is:',students.length-1);
students.push('nitesh');
console.log("The last item of the array is:", students.length);
console.log('whole array is:',students);
students.pop();
console.log('update array is:', students);

let fruits = ['apple', 'mango', 'pears'];
fruits.unshift('strawberry');
console.log(fruits) // ['mango', 'pears']

let randomArray = ['0','1',[2],[3],[4],[5],[6],[7],[8]];
// randomArray[7] = '100';
randomArray.splice('7', '8', '200','300','400')
console.log(randomArray);

randomArray = ['one', 'two','three', 'four'];
randomArray.splice(2,1,'apple')
console.log(randomArray);

let foods = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = foods.slice(1,3);
console.log(foods); //["Banana", "Orange", "Lemon", "Apple", "Mango"]
console.log(citrus); // [ 'Orange', 'Lemon' ]

function getFullName(firstName, )


let hello = 'hello';
let world = 'world'
let result = hello + ''+world;
console.log(4/2);
console.log(result);