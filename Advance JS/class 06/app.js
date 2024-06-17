var name = prompt("Enter your name","faraz");

console.log(name)



var num1 = Number(prompt("Enter your value1"));

var num2 = Number(prompt("Enter your value2"));


console.log(num1 + num2)

var city = "karachi";

if(city == "karachi")
{
    console.log("accepted")
}
else{
    console.log("not accepted..")
}


var city = "karachi";

var check = city && "accepted";

console.log(check)


var bool = false;

var check = bool || "true"

console.log(check)

var city = "KARACHI";

console.log(city.toLowerCase())




var city = "karachi";

var firstChar = city.slice(0,1).toUpperCase();

var RemainChar = city.slice(1).toLowerCase();

var combine = firstChar+ RemainChar

console.log(combine)


var arr = ['Karachi',"Lahore","Islamabad","Peshawar","Multan"];

var input = prompt("Enter your city");

var updateinput1 = input.slice(0,1).toUpperCase();

var updateinput2 = input.slice(1).toLowerCase();

var UpdatedInput = updateinput1 + updateinput2;

var flag = "false";

for (var i=0; i < arr.length ; i++){

    if(arr[i] == UpdatedInput){
        flag = "true";
        console.log("Found your city");
    }
}   

if(flag === "false"){
    console.log("not found your city")
}


var str = "Hello My name is Muhammad Faraz";

console.log(str.length)


var userInput = prompt("Enter some text please..");

var textLength = userInput.length;

for(var i =0;i<textLength;i++)
{
    if(userInput.slice(i,i+2) === "  "){
        alert("double space acquired");

    }
}



var str = prompt("Enter some text");

var numChars = str.length;




for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === "  ") 
    {
        alert("No double spaces!");
        break;
    }
}

var str = "The New Yorker World War II magazine doesn't allow the phrase World War II."

var strLength = str.length;

console.log(strLength)

for(var i =0;i<strLength;i++)
{
    if(str.slice(i,i+12) === "World War II"){
        str = str.slice(0,i) + "The Second World War"
    }
}
console.log(str)


console.log(str.replace(/World War II/g,"The Second World War "))

var str = "To be or not to be."

console.log(str.charAt(8))

console.log(str.lastIndexOf("be"));

var arr = [1,2,3,[4,5,{name:"Faraz",age:21}]];

arr[10] = "faraz";

for(var i =0;i<arr.length;i++)
{
    for(var j = 0;j<arr[i].length;j++)
    {

        console.log(arr[i][j])
    }
}


console.log(arr)


var str = 10

console.log(str.toString())

console.log(typeof str.toString())


var num = Math.random();

console.log(+(num.toFixed(2)))


function getValue(){
    var input = document.getElementById("name");
    var arr =[]

    let obj = {
        name:input.value
    }
    arr.push(obj)

    localStorage.setItem("userName",JSON.stringify(arr));  

    input.value = "";
}
