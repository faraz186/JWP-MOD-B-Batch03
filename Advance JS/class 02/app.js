let arr = ["faraz","ali","aryan",[12,100,false,[true],[52,"ahmed"]],["hamza",false,15],true];

let [val1,val2,val3,val4,val5] = arr;

let [val1,val2,val3] = arr[4]

let [val1,val2,val3,val4,val5] =arr[3]
    
let [val6] = arr[3][3]


console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)
console.log(val6)

let obj = {
    name:"abc",
    email:"abc@gmail.com",
    age:20,
    address:{
        street:"A",
        city:"karachi",
        postaCode:75950,
    }
}

let {name:myname,email,age,address} =obj;

let {street,city,postaCode} = obj.address

console.log(street);
console.log(city);
console.log(postaCode);
console.log(address);


console.log(obj.address.city)


const nestedObject = {
    key1: "value1",
    key2: "value2",
    key3: {
      subKey1: "subValue1",
      subKey2: "subValue2",
      subKey3: {
        subSubKey1: "subSubValue1",
        subSubKey2: "subSubValue2",
        subSubKey3:{
            subSubKey4: "subSubValue3.1",
            subSubKey5: "subSubValue3.2",
        },
        subSubKey6: "subSubValue4",
      },
      subKey4:{
        subSubKey7: "subSubValue4.1",
        subSubKey8: "subSubValue4.2",
      }
    },
    key4: "value4",
  };

let {key1,key2,key3,key4} = nestedObject;

let {subKey1,subKey2,subKey3,subKey4} = nestedObject.key3;

let {subSubKey1,subSubKey2,subSubKey3,subSubKey6} = nestedObject.key3.subKey3;

let {subSubKey4,subSubKey5} = nestedObject.key3.subKey3.subSubKey3;

console.log(subSubKey4)
console.log(subSubKey5)
console.log(subSubKey3)
console.log(subSubKey6)

console.log(key1)
console.log(key2)
console.log(key4)
console.log(subKey1)
console.log(subKey2)
console.log(subKey3)
