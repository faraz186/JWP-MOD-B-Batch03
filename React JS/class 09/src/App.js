
import './App.css';
 import TabelData from './component/tabel';
 import InputVal from './component/input';
 import Card from './component/card';
 import { useState } from 'react';
 import ChangeBtn from './component/button';

  function App() {

    let Arr =[
      {
        name:"wasif",
        fatherName:"Atif Ahmed",
        Age:23
      },
      {
        name:"Aqib",
        fatherName:"Atif Ahmed",
        Age:18
      },
      {
        name:"Atif",
        fatherName:"Abdul Waheed",
        Age:35
      },

      {
        name:"Raziq",
        fatherName:"shafiq khan",
        Age:35
      }

      
    ]


    // card Data

  let card = [
    {
      id:12,
userName:"wasif",
age:25,
institute:"Xyz",
isActive: true,
category:"IT Professional",
    },
    {
      id:12,
userName:"Aqib",
age:25,
institute:"Xyz",
isActive: true,
category:"IT Professional",
    }
  ]





let [count,setcount]=useState(0)
let fofo = ()=>{
setcount(count+1 )
}



    const [text,textValue]=useState("")
    const [pass,newpass]=useState("")


    let handel = (newval)=>{
      textValue(newval)
    }

    let handelpass = (newvaltwo)=>{
      newpass (newvaltwo)
          }
    
  return (
<div>
  {/* Tabel Data Assingment */}

  <hr/>
<h1>Tabel Data</h1>
 
                {
                Arr.map(((x,i)=>{
              return    <TabelData name ={x.name} fathername = {x.fatherName} age = {x.Age}/>

                }))
              }  
              



              {/* input Assignment */}
              <hr/>
              <h1>input</h1>
  
 <InputVal inputType="text" placeholder="Name" onChange={handel} />
  <p>{handel}{text}</p>
  <InputVal  inputType="password" placeholder ="Password" onChange={handelpass}/>
  <p>{pass}</p>
  <InputVal inputType="file" /> 




{/* Card Assignment */}
<hr/>
<h1>card Data</h1>
 {
  card.map((x)=>{

 return <Card id={x.id}   name={x.userName}  age={x.age} isactive ={x.isActive} category={x.category}/>
  })
} 
<hr/>
<h1>Button</h1>

<ChangeBtn buttonvalue="click"/>
<h1>{count}</h1>
<ChangeBtn buttonvalue="Count" class="btn" click={fofo}/>
  
</div>
  );
}

export default App;
