// 01.Create a variable called carName, assign the value Volvo to it.
let carName = "volvo";
console.log(carName);

// 02.On one single line, declare three variables with the following names and values:

firstName = "John"
lastName = "Doe"
age = 35

// Ans:

// let firstName = 'John', lastName = 'Doe', age = 35;

let firstName = "John";  // write variable name
let lastName1 = "Doe" //write variable values 
let age = 35 ; // write variable name and values both 

// 03.Use the correct assignment operator that will result in x being 50 (same as x = x * y).

x=10;
y=5;
x *= y;

// 04.Use comments to describe the correct data type of the following variables:

let length = 16; // data type Number ? 
console.log(typeof length);
let lastName = "Johnson"; // data type String? 
console.log(typeof lastName);

const x = {
    firstName: "John",  
    lastName: "Doe"
  };    // data type object? 
  console.log(typeof x)

// 05.Execute the function named myFunction.
function myFunction() {
    alert("Hello World!");
}
// myFunction();

//06. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
const person={
    name:"John",
    age:50,
};
// alert(person.name + ' ' + person.age);

// 08Array Related Question 
// 1. Alert the number of items in an array, using the correct Array property: 
const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);
// 2. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"]; 
Brand[0] ="Ford";
console.log(Brand);

// 09.Math Related Problems:
// Problem-01
let a = Math.random() * 10;
console.log(a);
// Problem-02
let b = Math.max(10,20);
console.log(b);
// Problem-03
let c = Math.sqrt(9);
console.log(c);


// 10.comparison operator related problems! 
// Problem-1
// x=10;
// y=5;
// alert(x > y);
// problem-2
let age1 =18;
let messege;

age1 >= 18 ? (messege ='Too Young') : (messege = 'Old enough');
console.log(messege);