let obj1 = {   
    name:"faraz", 
    age:21,          
    email:"faraz@gmail.com",
}            
     
 console.log("hasOwnProperty" in obj1)  
console.log(obj1);   

let obj = {  
    name:"faraz",  
    age:21,
    email:"faraz@gmail.com",     
    getName:function(){  
        return  obj.name;
    },   
    address:{
        street:"A",  
        city:"karachi",  
        country:"Pakistan",
        postalCode:12345    
    }
}

for (let keys in obj) {
    console.log(keys, obj[keys])
    for (let innerKeys in obj[keys]) {
        console.log(innerKeys)
    }
    for (let innerInnerKeys in obj[keys][innerKeys]) {
        console.log(innerKeys)
    }
}

let obj1 = {
    name:"faraz",
    age:21,
    address:"karachi"
}

for(let a in obj1){
    console.log(a,obj1[a])
}


delete obj.age

console.log(obj);

obj.courses = ["html","css","js"]

obj.courses.unshift("react js")

console.log(obj)

console.log(obj.address["country"])

let func = function(){
    console.log(123)
}

func()

let data = {
    sectionA: {
        Batch1: {
            users: {
                user1: {
                    name: "faraz",
                    age: 21,
                    address: "karachi"
                },
                user2: {
                    name: "hamza",
                    age: 20,
                    address: "lahore"
                },
                user3: {
                    name: "salman",
                    age: 25,
                    address: "quetta"
                }
            },
        }
    },
    sectionB: {
        batch2: {

            users2: {
                user4: {
                    name: "saqib",
                    age: 18,
                    address: "peshawar"
                }
            }
        }
    }
}

for(let keys in data){
    console.log(keys)
    for(let innerKeys in data[keys]){
        console.log(innerKeys);
        for(let innerInnerKeys in data[keys][innerKeys]){
            console.log(innerInnerKeys,data[keys][innerKeys][innerInnerKeys])
        }
    }
}


function Student(name,age,address,email)
{
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
}

Student.prototype.getName = function(){
    return this.name
}
var student1 = new Student("faraz",21,"karachi","faraz@gmail.com")

student1.name = "umer";

console.log(student1.getName())


Student.prototype.getName = function(){
    return this.age
}

var student2 = new Student("ahsan",20,"lahore","ahsan@gmail.com")

console.log(student1.getName())
console.log(student2)

let obj = {
    name:"faraz",
    age:21,
    email:"faraz@gmail.com",
    getName:function(){
        return  obj.name;
    },
    address:{
        street:"A",
        city:"karachi",
        country:"Pakistan",
        postalCode:12345
    }
}
