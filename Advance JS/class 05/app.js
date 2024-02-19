var arr = [1,2,3,4,5,[24,true],6,["hamza","faraz"],7,8,9];  

for(var i = 0; i< arr.length;i++)
{    
    for(var j =0;j<arr[i].length;j++)
    {        
        console.log(arr[i][j])   
      
    }     
}   

arr[9] = "faraz"

arr.unshift("hamza")   
     
arr.pop()

arr.push("faraz")   

arr.shift()      

arr.splice(6,0,96,45)
  
var output = arr.slice(4,11)

console.log(output)
     
console.log(arr)

var para = document.getElementById("para");   

console.log(para)    

para.innerHTML = `<h2>Welcome USER</h2>`   

function popup(){
    alert("Hello User")
}
    
var obj = [{
    question:"which tag has a largest heading in html",
    option1:"<h6>",
    option2:"<h2>",
    option3:"<h1>",
    correctAns:"<h1>",
    
}]

var question = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");   

question.innerHTML = obj[0].question;
opt1.innerText = obj[0].option1;
opt2.innerText = obj[0].option2;
opt3.innerText = obj[0].option3;


var anchor = document.getElementById("anchor");

anchor.setAttribute("href","https://www.google.com")

console.log(anchor)

let liElement = document.createElement("li");

let liText = document.createTextNode("faraz");

liElement.appendChild(liText)

console.log(liElement)

let list = document.getElementById("list");

list.appendChild(liElement)    

var para = document.getElementById("para");

para.style.fontWeight = "bold";
para.style.color = "blue";
para.style.border = "5px solid black";
para.style.padding = "10px 15px";
para.style.borderRadius = "5px";

function changeImage(id,src)
{
    var image = document.getElementById(id);
    image.src = src
}
