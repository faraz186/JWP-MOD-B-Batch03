import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function Update() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [IsLoader, setIsLoader] = useState(false);
  const APILink = "https://odd-lime-rhinoceros.cyclic.app/api/project";

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoader(true);
    axios
      .get(`${APILink}/${id}`)
      .then((res) => {
        setData(res.data.data);
        setIsLoader(false);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(`${APILink}/${id}`, data)
      .then((res) => {
        alert("Data Update SuccessFully!!");
        navigate("/home/post");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      {IsLoader ? (
        <Box>
          <CircularProgress
            style={{ position: "absolute", top: 280, left: 850 }}
            color="inherit"
          />
        </Box>
      ) : (
        <div
          style={{ marginTop: 100 }}
          className="d-flex w-100 justify-content-center align-items-center"
        >
          <div
            style={{
              width: 650,
              borderRadius: 8,
              boxShadow: "-5px 10px 4px grey",
            }}
            className="border bg-light p-5"
          >
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">ID:</label>
                <input
                  type="text"
                  disabled
                  name="name"
                  className="form-control m-2"
                  value={`${id}`}
                />
              </div>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control m-2"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="text">description:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control m-2"
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                />
              </div>
              <br />
              <button className="btn btn-info w-50 ms-32">Update</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Update;
