import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL } from "./config";

function App() {

  const imageHandler = async (e) => {
    // console.log("file", e.target.files[0])
    try {
      const file = e.target.files[0]
      const form = new FormData()
      form.append("abc", file)
      const response = await axios.post(`${BASE_URL}/api/imageupload`, form, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })
      console.log("response", response)

    } catch (error) {
      console.log("error", error.message)
    }


  }

  return (
    <>
      <br />
      <br />
      
      <input type="file" onChange={imageHandler} />
      
      <br />
      <br />

    </>
  );
}

export default App;
