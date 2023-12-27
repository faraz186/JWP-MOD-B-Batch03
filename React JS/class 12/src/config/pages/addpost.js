import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addpost() {
  const [inputData, setInputData] = useState({ name: "", description: "" });
  const APILink = "https://odd-lime-rhinoceros.cyclic.app/api/project";

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(`${APILink}`, inputData)
      .then((res) => {
        alert("Data Added SuccessFully", res.data);
        navigate("/home/post");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div
      style={{ marginTop: 100 }}
      className="d-flex w-100 justify-content-center align-items-center"
    >
      <div style={{ width: 650 }} className="border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              className="form-control m-2"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="text">description:</label>
            <input
              type="text"
              name="name"
              className="form-control m-2"
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info w-50 ms-32">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Addpost;
