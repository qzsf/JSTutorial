console.log('Hello!');
const name = 'Ben';
console.log(name);
let age;
age = 12;
console.log(age);
age = 13;
console.log(age);

/////////////////////////////////////////////////
// Rest Parameters
// names with hold the three arguments as an array.
// Then we iterate each item, and output their names.

// function hi(...names) {
//     names.forEach(name => console.log('Hi ' + name));
// }
// hi('Al', 'Ben', 'Kate');

// names holds the rest of the arguments after 'Hi'.
// That's why it is called "Rest". And the rest element
// must be the last parameter of a function.
function hi(str, ...names) {
    names.forEach(name => console.log(str + ' ' + name));
}
hi('Hi', 'Al', 'Ben', 'Kate');


///////////////////////////////////////////////////
// Spread Operator
// the syntax is the opposite of the rest parameter
// It allows an iterable such as an array expression
// or string to be expanded in places where zero or more arguments (for function calls)
// or elements (for array literals) are expected, or an object expression to be expanded
// in places where zero or more key-value pairs (for object literals) are expected.
function display(char1, char2, char3, char4, ...rest) {
    console.log(char1, char2, char3, char4);
    console.log(rest);
}
let letters = 'abcdefgh';
display(...letters);
// example to copy string and array items to a new array
const ben = 'ben';
const kate = ['k', 'a', 't', 'e'];
const newArray = [...ben, ...kate];
console.log(newArray)

///////////////////////////////////////////////////
// Destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays, or properties
// from objects, into distinct variables.
//////////////////////////////////////////////////

// Destructuring Arrays
const [first, , third, forth] = [1, 2, 3, 4];
console.log(first, third, forth);

// Destructuring an array using rest
console.log('Destructuring with rest');
let [one, ...rest] = [1, 2, 3, 4];
console.log(one, rest);
rest.forEach(item => console.log(item));
// we can also do something like below to skip values
[, ...rest] = [1, 2, 3, 4, 5]
console.log(rest);

/////////////////////////////////////////////////////
// Destructuring Objects
// notice the object property names must be same as the constants or variables
const person = {
    pName: 'Al',
    pAge: '16'
}
const { pName, pAge } = person;
console.log(pName, pAge);


//////////////////////////////////////////////////////////
// Conditions and Loops
//////////////////////////////////////////////////////////
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// if
let b = 3;
if (b === 1) {
    //  block of code to be executed if condition1 is true
    console.log('if block');
} else if (b === 2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
    console.log('else if block');
} else {
    //  block of code to be executed if the condition1 is false and condition2 is false
    console.log('else block');
}
// we can short the if... else... statement to something like this
// if the condition 1 greater than 2, then returns true else returns false.
console.log((1 > 2) ? true : false);

//switch
let item = 'con3';
switch (item) {
    case "con1":
        console.log("condition 1");
        break;
    case "con2":
        console.log("condition 2");
        break;
    case "con3":
        console.log("condition 3");
        break;
    default:
        console.log("nothing match");
}

// For loop:
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5)
        break;  // 'break' breaks out of the loop when i equals to 5
}
for (let i = 0; i < 10; i++) {
    if (i === 5)
        continue;   // 'continue' skips the lines inside the loop after it,
    // and goes to the next iteration when i equals to 5
    console.log(i);
}
// Do while loop: run at least once.
let d = 0;
do {
    console.log(d);
    d++;
} while (d < 3);

// While loop:
let w = 0;
while (w < 3) {
    console.log(w);
    w++;
}

/////////////////////////////////////////////////////////////
// Operators
/////////////////////////////////////////////////////////////

//  equality operators
//////////////////////////////////////////////////////////////
// == JavaScript will try to convert variables, var1 and var2, to the
// same type if they are not to compare them.
const var1 = 1, var2 = '1';
if (var1 == var2) {
    console.log('double equal');
}
// two variables need to be exactly same for both type and value.
if (var1 === var2) {
    console.log('triple equal');
} else {
    console.log('triple not equal');
}
// not equal to and not double equal to. same rules as double equal and triple equal apply.
if (var1 != var2) {
    console.log('not equal');
}
if (var1 !== var2) {
    console.log('not double equal');
}


// unary operators - they work on a single value
////////////////////////////////////////////////////////////////
// ++var    increase variable value by 1
// var++    increase variable value by 1 after it's been used.
// --var    decrease variable vaule by 1.
// var--    decrease variable value by 1 after it's been used.
// +var     convert a string to a number, but it doesn't mutate variable itself.
// -var     convert a string to a number and negate the number. it doesn't mutate variable itself.
let num1 = 1;
console.log(++num1);
console.log(num1++);
console.log(num1);
let num2 = '-2';
console.log(+num2)
console.log(num2)


// logical operators
/////////////////////////////////////////////////////////////////
// &&, ||, !
// logical and
// double ampersands. for this if statement to be true, both expressions need to be true.
console.log(num1 === 3 && num2 === -2)
if (num1 === 3 && num2 === '-2') {
    console.log('logical and');
}
// logical or
// double pipes. only one of the two conditions needs to be true to execute the if block
if (num1 === 3 || num2 === '-2') {
    console.log('logical or');
}

// other usage of ||
// if userName is set then output userName, otherwise use defaultName.
let userName;
// userName = 'Al';
let defaultName = 'There';
console.log('Hi ' + (userName || defaultName));

// not
// generate the opposite value
console.log(!false)


// relational operators
// >, <, >=, <=
/////////////////////////////////////////////////////////////////////////
// compare numbers is straight forward
if (1 < 2) {
    console.log('1 is smaller than 2.');
}
// when compare strings it uses ascii values
if ('a' > 'Z') {
    console.log('a\'s ASCII value is greater than Z');
}

// assignment operators
// ///////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Scopes
///////////////////////////////////////////////////////////////////////

// function scope
let g = 'global';
function print() {
    console.log(g);
    let l = 'local';
    console.log('inside function', l);
}
print();
// console.log(l);    // error: l is undefined

// Variables declared with let keyword inside curly braces have block scope.
if (true) {
    console.log(g);
    let l = 'local';
}
// console.log(l);    // error: l is undefined

// If a function or a block of code cannot find a variable it looks to its parents until it finds the variable.

////////////////////////////////////////////////////////////////////////////
// IIFE - Immediately Invoked Function Expression.
// We use IIFE to group our code, so it wouldn't interfere with other code.

(function () {
    console.log('IIFE');
})();

// assign an IIFE to a variable
let app = (function () {
    let user = 'Al';
    console.log('IIFE');
    return {};
})();
console.log(app);

///////////////////////////////////////////////////////////////////////////////
// closures - any function that keeps reference to variables from its parent's scope
// even after the parent has returned.

// as long as we hold on to the reference of a inner function,
// all variables from its parent will persist.
function city() {
    let city = "LA";
    return {
        get: function () { console.log(city); },
        set: function (newCity) { city = newCity; }
    };
}
let myCity = city();
myCity.get();           // output: LA
myCity.set('SF');
myCity.get();           // output: SF

///////////////////////////////////////////////////////////////////////////////////
// "this" keyword
///////////////////////////////////////////////

// most common case
let obj1 = {
    id: 123,
    getId: function () {
        return this.id;
    }
};
console.log(obj1.getId())

// In regular functions the this keyword represented the object
// that called the function, which could be the window, the document,
// a button or whatever.
// With arrow functions the this keyword always represents the object
// that defined the arrow function.
// In classic function expressions, the this keyword is bound to different
// values based on the context in which the function is called.
// Function expressions are best for object methods.
// Arrow functions are best for callbacks or methods like map, reduce, or forEach.
let obj2 = {
    myVar: 'foo',
    myFunc: function () {
        console.log(this);
        console.log(this.myVar);    // 'this' refers to the object
        setTimeout(function () {
            console.log(this);      // 'this' refers to the window object
            console.log(this.myVar);
        }, 1000);
    }
};
obj2.myFunc();

// Whereas arrow functions use the value of this in their lexical scope.
// This leads to very different behavior.
let obj3 = {
    myVar: 'foo',
    myFunc: function () {
        console.log(this);
        console.log(this.myVar);    // 'this' refers to the object
        setTimeout(() => {
            console.log(this);      // 'this' still refers to the object
            console.log(this.myVar);
        }, 1000);
    }
};
obj3.myFunc();


//////////////////////////////////////////////////////////////////////////////
// object
///////////////////////////////////////////////////////////////////////////////

// object literals //////////////////////
let al1 = {
    id: 1,
    name: 'Al',
    hairColor: 'black'
}
let ben1 = {
    id: 2,
    name: 'Ben',
    hairColor: 'green'
}
console.log(al1, ben1);

// object constructor//////////////////////////
// to create objects. it looks like a function but behaves differently
function Person(name, hairColor) {
    this.name = name;
    this.hairColor = hairColor;
    this.hi = function () {
        console.log('Hi, my name is ' + this.name + '.');
    }
}
let al2 = new Person('al', 'blue');
let ben2 = new Person('ben', 'red');
console.log(al2, ben2);
al2.hi();

// prototypes ////////////////////////////
// add new properties/methods to object constructor and/or to all existing
// objects of a given type, so the same methods or properties don't need to
// be created for each object. this will save a lot of memories.

// function Person1(name, hairColor) {
//     this.name = name;
//     this.hairColor = hairColor;
// }
// Person1.prototype.hi = function () {
//     console.log('Hi, my name is ' + this.name + '.');
// }
// let kate2 = new Person1('kate', 'blue');
// kate2.hi();
import {kate as kay} from './prototype.js';
kay.hi();
// we can also add new features to the JavaScript built-in objects
// programmers use prototype to create polyfills for old browsers
// to support modern functionalities.
String.prototype.hi = function () {
    return 'Hi ' + this.toString() + '.';
}
console.log('kate'.hi());

// JSON ///////////////////////////////////////////////////////////
// JavaScript Object Notation. it's a lightweight format for storing
// and transporting data. often used when data is sent from a server
// side API to a web page.
// JSON looks very similar to the object literal, but all strings need
// to be quoted.
let alJson = JSON.stringify(al1);   // transform a JavaScript object to JSON, a string.
console.log(alJson);
console.log(JSON.parse(alJson));    // JSON.parse parse the string back to a JS object.


//////////////////////////////////////////////////////////////////////
// Classes and Modules
//////////////////////////////////////////////////////////////////////
// class
class Mammal {
    constructor() {
        this.type = 'mammal'
    }
    getType() {
        return this.type;
    }
}
// inheritance ///////////////////////////////////////////////////////
class Persoon extends Mammal {
    constructor(name, hairColor) {
        super();
        this.name = name;
        this.hairColor = hairColor;
    }
    sayHi() {
        console.log('Hi, my name is ' + this.name + '.');
        console.log('I am a ' + super.getType() + '.');
    }
}
let newPerson = new Persoon('kate', 'green');
newPerson.hairColor = 'orange';
console.log(newPerson);
newPerson.sayHi();

// modules //////////////////////////////////////////////////////////
// modules help us organize our code
// we will split our code into modules
// use import and export to encapsulate our code into files, one module per file.


/////////////////////////////////////////////////////////////////////
// error handling ////////////////////////////////////
/////////////////////////////////////////////////////////////////
try {
    throw new Error('this is an error.');
} catch (error) {
    console.log('error: ' + error);
} finally {
    console.log('this always runs.')
}
console.log('continuing...');



///////////////////////////////////////////////////////////////////////////
// Promises & Async/Await
// Object that represents the eventual completion (or failure) of
// an asynchronous operation, and its resulting value.
////////////////////////////////////////////////////////////////////////////
import {promiseFunction} from './promise.js'
promiseFunction();

//////////////////////////////////////////////////////////////////////////////
// HTTP Requests
// to exchange data with servers
///////////////////////////////////////////////////////////////////////////////

// use the low level XMLHttpRequest object
///////////////////////////////////////////////////////////////////////////////
import {sendRequest} from './xhr.js';

// use fetch
////////////////////////////////////////////////////////////////////////////////
import fetchUsers from './fetch.js';
// fetchUsers();


// HTTP Requests using a third party library axios
//////////////////////////////////////////////////////////////////////////////////
// axios is one of the most popular libraries to perform HTTP Requests. it's built
// on top of XMLHttpRequest, and it's a promise based. Here is how it works.
import gu, {asyncFunction} from './getUsers.js'
gu();
asyncFunction();
