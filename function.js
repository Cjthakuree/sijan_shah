// function getFullname(firstName, lastName) {
//     return firstName + ''+lastName;
// }

// console.log(getFullname("ram","shyam"));

// function getInfo(fullName, age) {
//     return `my full name is ${fullName} and my age is ${age}.`;
// }
// console.log(getInfo("rajesh hamal", 20));

// console.log(getInfo("Gopal dura"));
// console.log{getValue([1,2])};

// const helloworld =() => {
//     return 'hello world'
// }
// console.log(helloworld)

//make array with 20 value
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
// array.forEach(function(element, index){
//     console.log(element, index);
// })

// let animal = {}
//     animal.name= 'cow'
//     animal.age= '10'
//     animal.color= 'black'

// let mammal = {
//     name: 'cow',
//     age: '10',
//     color: 'black'
// };

// console.log(animal)
// console.log(mammal)

// console.log("Color of mammal is:", mammal.color);

// mammal.color = 'blue'

// let vehicle = {
//     vehicle : 'Bike',
//     color : 'black',
//     weight : 150
// };

// console.log(vehicle)
// console.log("Weight of vehicle is:", vehicle.color)
// delete vehicle.weight
// console.log("update weight of vehicle is:", vehicle);

// console.log("Vehicle Object key array:", Object.keys(vehicle));
// console.log("Vehicle Object values array:", Object.values(vehicle));

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const result = fruits.find(function (elements, index){
    return elements === "Apple";
});

console.log(result);