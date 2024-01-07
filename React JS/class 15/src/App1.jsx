import { useEffect, useState } from "react"
import { collection, addDoc,getDocs, updateDoc, doc,deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [country,setCountry] = useState("");
  const [userData,setUserData] = useState([]);
  const [refresh,setRefresh] = useState(false);

  useEffect(()=>{
    getData()
  },[refresh])

  const getData = async()=>{
    try {
      let arr = []
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc)=>{
          // console.log("doc",doc.data());
          // console.log("id",doc.id);
      arr.push({
        ...doc.data(),
        id:doc.id
      });
      setUserData([...arr]);
      })
    } catch (error) {
      console.log(error);
    }
  }

  console.log(userData);

  const submitHandler = async (e)=>{
    try {
      e.preventDefault();

    let obj = {
      name,
      email,
      country,
    }
    // console.log(obj);
    
    const docRef = await addDoc(collection(db,"users"),obj);
    // console.log(docRef,"docRef");
      setRefresh(!refresh);
    
    setName("");
    setEmail("");
    setCountry("");

    } catch (error) {
      console.log(error)
    }
    
  }

  const editBtn = async(id)=>{
    try {
      const editValue = prompt("Enter update value..");

      const userObj = {
        name:editValue
      }

      await updateDoc(doc(db,"users",id),userObj);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error)
    }
  }


  const deleteBtn = async(id)=>{
    try {
     await deleteDoc(doc(db, "users", id));
      setRefresh(!refresh);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>

      <form onSubmit={submitHandler}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
        <br />
        <br />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <br />
        <br />
        <input value={country} onChange={(e)=>setCountry(e.target.value)} type="text" placeholder="Enter country" />  
        <br />
        <br />
        <button>Submit</button>
      </form>    

      <div>
        {
          userData.map((e,i)=>{
            return(
              <li key={i}>{e.name} <button onClick={()=>editBtn(e.id)}>Edit</button><button onClick={()=>deleteBtn(e.id)}>Delete</button></li>
            )
          })
        }
      </div>
    </>
  )
}

export default App
