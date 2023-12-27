import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonPlusFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { MdCreate } from "react-icons/md";
import { MdCoPresent } from "react-icons/md";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/usersArr")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you want to delete?..");

    if (confirm) {
      axios
        .delete("http://localhost:3000/usersArr/" + id)
        .then((res) => {
          navigate("/");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center bg-light"
      style={{ height: "130vh", marginTop: "-50px" }}
    >
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn fs-6 btn-success">
            <BsPersonPlusFill className="fs-6 mb-1 me-1" />
            Add
          </Link>
        </div>
        <table className="table table-stipend">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>
                    <Link
                      to={`/read/${e.id}`}
                      className="btn btn-sm btn-outline-info me-2"
                    >
                      <MdCoPresent />
                    </Link>
                    <Link
                      to={`/update/${e.id}`}
                      className="btn btn-sm btn-outline-primary me-2"
                    >
                      <MdCreate />
                    </Link>
                    <button
                      onClick={(d) => handleDelete(e.id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      <BsFillTrashFill />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
