import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function Posts() {
  const [data, setData] = useState([]);
  const [IsLoader, setIsLoader] = useState(false);
  const navigate = useNavigate();
  
  const APILink = "https://odd-lime-rhinoceros.cyclic.app/api/project";
  function handleSubmit(id) {
    const confi = window.confirm("Do you want to delete..");

    if (confi) {
      axios
        .delete(`${APILink}/${id}`)
        .then((res) => {
          alert("Record has been deleted..");
          navigate("/home/post");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  useEffect(() => {
    setIsLoader(true);
    axios
      .get(`${APILink}`)
      .then((res) => {
        setData(res.data.data);
        setIsLoader(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="text-end"></div>
      <Link
        to="/home/createpost"
        style={{
          position: "absolute",
          left: 1450,
          top: 120,
          paddingRight: 30,
          paddingLeft: 30,
          textAlign: "center",
        }}
        className="font-bold btn btn-primary"
      >
        Add +
      </Link>
      <h3
        style={{
          fontSize: 25,
          textDecoration: "underline",
        }}
      >
        Fetch Data from Rest Api
      </h3>
      <br />
      {IsLoader ? (
        <Box>
          <CircularProgress
            style={{ position: "absolute", top: 260, left: 650 }}
            color="inherit"
          />
        </Box>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <td>
                <b>ID</b>
              </td>
              <td>
                <b>Name</b>
              </td>
              <td>
                <b>Description</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e._id}</td>
                  <td>{e.name}</td>
                  <td style={{ width: "550px" }}>{e.description}</td>
                  <td>
                    <Link
                      to={`/home/update/${e._id}`}
                      className="btn btn-sm p-2 font-bold btn-success"
                    >
                      Update
                    </Link>
                    <button
                      onClick={(d) => handleSubmit(e._id)}
                      className="btn btn-sm p-2 font-bold ms-1 btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Posts;
