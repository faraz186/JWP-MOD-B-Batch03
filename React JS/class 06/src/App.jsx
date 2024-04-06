import Data from "./Data"
import CMCard from "./components/CMCard"
import bulbOn from '/bulbOn.webp';
import bulbOff from '/bulbOff.jpg';
import { useState } from 'react';
  
function App() 
{
  const [bulbon,setBulbon] = useState(false);
  const [isLoggedIn,setisLoggedIn] = useState(true);

  // if(bulbOn)
  // {
  //   console.log("on");
  // }
  // else{
  //   console.log("off");
   
  // }

  // var arr = ["faraz","Ali","Ahmed","hamza","jaffar"]

  var arr = null || ["faraz","Ali","Ahmed","hamza","jaffar"];

  // var arr = null || [];

  return (
    <>

       {
        isLoggedIn? <> <h1>WELCOME USER</h1>
        <h1>DASHBOARD!</h1>
        <h1>USER NAME</h1></>:null
       }

      <br />
      <br />

       {
        isLoggedIn? <button onClick={()=>setisLoggedIn(false)}>LogOut</button> :<button onClick={()=>setisLoggedIn(true)}>Login</button>
       }

       <button onClick={()=>setisLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "logout":"login"}
        </button>
      <br />
      <br /><br />
      <br /><br />
      <br /><br />

    {
      bulbon ? <img src={bulbOn} width={250} height={350}/>:<img src={bulbOff} width={250} height={350}/>
    }

      <button onClick={()=>setBulbon(true)}>ON</button>
      <button onClick={()=>setBulbon(false)}>OFF</button>

      <br />
      <br />
      <br />
      <br />

    <h1>React List</h1>
    
    {
       arr && arr.map((e,i)=>{
        return(  
            <li key={i}>{e}</li>     
        )
      })
    }
    
      <br />
      <br /><br />
      <br />

    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",gap:"30px"}}>

      {
        Data.map((element,index)=>{
          return(
            <div key={index}>
            <CMCard title={element.title} description={element.description} imgSrc={element.imgSrc}/>
            </div>
          )
        })
      }

       <CMCard title={Data[0].title} description={Data[0].description} imgSrc={Data[0].imgSrc}/>

       <CMCard title={Data[1].title} description={Data[1].description} imgSrc={Data[1].imgSrc}/>

       <CMCard title={Data[2].title} description={Data[2].description} imgSrc={Data[2].imgSrc}/>

       <CMCard title={Data[3].title} description={Data[3].description} imgSrc={Data[3].imgSrc}/>

     </div>

    </>

  )
}

export default App 
