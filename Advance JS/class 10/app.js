// variables
     
// var  ==> ES5  
// let  ==> ES6
// const ==> ES6  

  
var userName = "ali";
function foo() {
    userName = "Muhammad Faraz"  

}
foo()
console.log(userName)

  
// let => local scope

var userName = "faraz"
var userName = "Ali"  
console.log(userName)
let userName = "faraz"
userName = "Muhammad Faraz"

let userName = "Ali"

const userName = "Muhammad Faraz"
// /userName = "ALI"
const userName = "ali"
console.log(userName)


const userName;

console.log(userName)


// var ==> function scope
  
function foo() {
    let userName = "Muhammad Faraz"
}
foo()
console.log(userName)



if (true) {
    let userName = "faraz"
}

console.log(userName)


let userName;

function foo() {
    const  userName = "ALI"
}

foo()
console.log(userName)


console.log(userName)
let userName = "faraz"


// Arrow function

function foo(num1, num2) {
    console.log("hello", num1, num2)

    return {
        name: "ahmed"
    }
}

// console.log(foo(20, 30))
var add = foo(20, 30)

console.log(add)


const foo = _ => {
    console.log(num1, num2)
}


foo(50)

const add = (num1, num2) => num1 + num2

const result = add(80, 20)

console.log(result)


const foo = ()=>{
    console.log("hello")
    console.log("hello")
    return 200
}

const obj = {
    userName: "faraz",
    getName: function () {
        console.log(this)
        // return userName
    }
}

const obj2 = {
    userName: "Muhammad Faraz",
    getName: () => {
        console.log(this)
        // return userName
    }
}

obj.getName()
obj2.getName()



var number1 = 8
var number2 = 8

console.log(number + "x 1  = " + number *1)
console.log(`addition ${number1 + number2}  `)

var age = 50

var check = age === 18 ? "ALLOW" : "NOT ALLOW"
var check = age >= 18 ? "ALLOW" : "NOT ALLOW"
var check = age >= 18 && age <= 40 ? "ALLOW" : "NOT ALLOW"

console.log(check)
