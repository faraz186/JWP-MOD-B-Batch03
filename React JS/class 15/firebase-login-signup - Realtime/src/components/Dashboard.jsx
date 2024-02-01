import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUid = localStorage.getItem("uid");
    const getData = localStorage.getItem("userData");

    const originalData = JSON.parse(getData);

    setItems([
      {
        uid: getUid,
        originalData,
      },
    ]);
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <h1>Dashboard</h1>

      <button onClick={logOut}>Logout</button>

      {items?.map((e, i) => {
        return (
          <div key={i}>
            <img src={e?.originalData?.imgUrl} width={200} height={200} />
            <h1>{e?.uid}</h1>
            <h2>{e?.originalData?.email}</h2>
            <h2>{e?.originalData?.firstName}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Dashboard;
