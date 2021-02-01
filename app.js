var nam = 'Sampath';
console.log(nam);

//var vs let
/*
The main difference between var and let is the Scope of the variable.

Var is Function scoped and let is block scoped.


Const is reference type and has to be initialized.
Creates a new object and can be mutated but cannot be reassigned


*/

//Dynamically typed and primitive types, reference types
/*
JavaScript is Dynamically typed. 
The same variable can hold many values and types are associated with values not variables.
There are some supersets of JS like TypeScript that allow static typing

Null will return of type object but in reailty is a preimitive type


const n= " Sampath";
console.log(typeof n);

const car = null;
console.log(typeof car);

let und = undefined;
console.log(typeof und);

const hobbies = ['music', 'dance'];
const address = {
    city :'manchester',
    zip: '03102'
}
console.log(typeof address);

*/
// Type conversion
/*var val = '5';
val = Number(val);
console.log(val.toFixed());// Helps to print decimal values
val = Number(null);
console.log(val);// gives 0
val = Number('hellp');
console.log(val);// prints NaN
*/


//Template literals
/*var age = 50;
var city = "Villanova";
var gender = "male";

let html;
//without template literals
html = '<ul>' + 
    '<li>Name: ' + nam +  '</li>' + 
    '<li>Age: ' + age +  '</li>' + 
    '<li>City: ' + city +  '</li>' + 
    '<li>Gender: ' +  gender +  '</li>' + 
    '</ul>';

//with template literals
html2 =`
<ul>
<li>Name: ${nam}</li>
<li>Age: ${age}</li>
<li>City: ${city}</li>
<li>Gender: ${gender}</li>


</ul>


`

document.body.innerHTML = html2;
*/


//Arrays fun methods
/*
val numbers = [20,30, 405];
numbers.push(250); // add at the end
numbers.unshift(120);// add at the front
numbers.shift();// remove from front
numbers.splice(1, 1); // remove elements between indices

*/


//Difference between == and ===
/*
const num = '100';

if(num === 100){
    console.log('correct');
}
else{
    console.log('incorrect');
}


*/


//function declarations and expression


/*
function greet(firstname , lastname){
    return firstname
    + " " + lastname;
}

console.log(greet('sampath', 'kumar'));
console.log(greet());//returns undefined undefined

// to avoid that we can set some default values for fistname and lastname like
function greet(firstName = 'John', lastName = 'Doe'){
    return firstName + " " + lastName;
}
console.log(greet());


const square = function(x =3){
    return x*x;
};

console.log(square(5));

//Immediately invokable function expressions iifes

(function(){
    console.log("IIFEs ran..");
})();
*/


//map

/*
const users = [
    {id :1, name : 'sam'},
    {id :2, name : 'nhu'},
    {id :3, name : 'lop'},
    
];
const ids = users.map(function(users){
return users.id;
});
console.log(ids);
*/



//Window methods, objects and properties

/*
console.log(123);
window.console.log(123);
var val = window.outerHeight;
val = window.outerWidth;
val = window.innerHeight;
val = window.innerWidth;
//scroll points -> where you are in terms of scrolling

val = window.scrollY;
//location object
val = window.location;
val = window.location.port;
val = window.location.href;//complete url of the website including protocol
//window.location.href = 'https://google.com';//redirect

//History object
//window.history.go(-1);


//navigator object
val = window.navigator;
val = window.navigator.appVersion;//get the browser version
val = window.navigator.appName;
val = window.navigator.platform;
console.log(val);
*/


//scope

/*

var is  function scoped 
let and const is block scoped

*/





//DOM


