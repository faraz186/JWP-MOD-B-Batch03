var a = "Mohammad";           
      
var abc;          
      
var a = "faraz";  
     
console.log(a);

var a = "Muhammad";

function abc() {
    var a = "faraz";
    console.log(a)
}    
abc()


const a = 12;

{
    const a = 10;
    console.log(a);
}
console.log(a);


function abc() {
    const a = 100
}

abc()
console.log(a)


const a = 12;
a = 10;

console.log(a)



const firstName = "Muhammad";
const firstName = "usman";

console.log(firstName)



console.log(abc)

var abc = true;

abc()

function abc() {
    console.log("abc")
}


console.log(abc)

const abc = 12;

// Template literals


let firstName = "Muhammad";
let lastName = "faraz";

console.log("Welcome to " + firstName + " " + lastName)

console.log(`Welcome to ${firstName} ${lastName}. I am a web developer`)


let user = prompt("Enter a number to generate table");
let len = prompt("Enter length");


for (var i = 1; i <= len; i++) {
    document.write(`${user} x ${i} = ${user * i} <br>`)
}


// Destructuring of Array

let arr = [10, 20, 30, [true, 100, false, "abc"], 40, 50];

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

let [val1, val2, val3, val4, val5] = arr
let [bool1, num1, bool2, str] = arr[3];

console.log(bool1, num1, bool2, str)

console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)

console.log(val3)
console.log(val4)
console.log(val5)


let arr2 = ["karachi", "lahore", ["peshawar", ["quetta"], "islamabad", [12, true]]];

let [val1, val2, val3] = arr2

let [val4, val5, val6, val7] = arr2[2]

let [val8] = arr2[2][1]

let [val9, val10] = arr2[2][3]

console.log(val1)
console.log(val2)
console.log(val4)
console.log(val6)
console.log(val8)
console.log(val9)
console.log(val10)

function foo() {
    console.log("HELLO WORLD")
}

foo()

function add(num1, num2) {
    return num1 + num2
}

const result = add(10, 50)
console.log(result)

const add = function () {
    console.log("hello function")
}

add()

function foo() {
    console.log("HELLO WORLD")
}

foo()
// *****************************Arrow Function***********************************
const foo = () => {
    console.log("Arrow Function")
}

foo()

const add = _ => {
    console.log("num1 ", num1)
}

add(100)

function add(num1, num2) {
    return num1 + num2
}
const foo = fullName => fullName

const result = add()
console.log(result)

var add = () => 10 + 100

add()
function add() {
    console.log("normal function")
}

const obj = {
    name: "Jaffar",
    age: 22,
    getName: function () {
        console.log(this)
    }
    getName: () => {
        console.log(this)
    }
}

obj.getName()

The Spread (...) Operator
const arr1 = ["apple", "mango"]
const arr2 = ["banana"]

const arr3 = arr1 + arr2
es5
const arr3 = arr1.concat(arr2)

// es6
const arr3 = [...arr1, ...arr2]
const arr3 = [...arr1]

console.log(arr3)

var a = 10
var b = a
a = 100
console.log(b)

// const arr1 = ["apple"]  //REF :100
const arr2 = ["mango"]

// const arr3 = arr1 //REF :100

arr1.push("orange")

console.log("arr1", arr1)
console.log("arr3", arr3)

var arr1 = ["apple"];
var arr2 = ["mango"];

// var arr3 = arr1.concat(arr2)
var arr3 = [...arr1, ...arr2];

arr1.push("orange");

console.log("arr3", arr3);
