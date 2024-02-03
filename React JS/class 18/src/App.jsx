import React from "react";
import "./App.css";
import { Router_App } from "./config/Router_App";

// import { Component_02 } from "./component/Component_02";
import { useSelector } from "react-redux";

const App = () => {
  // const [data, setData] = useState({
  //   class: "react",
  //   module: "B",
  // });
  // setData('String')
  const state = useSelector((state) => state);

  console.log("state", state);

  return (
    <div>
      {/* <Component_01 data={data} /> */}
      {/* <Component_02 /> */}
      <Router_App />
      {/* Value: {state.user_data.value} */}
      {/* App JS File */}
    </div>
  );
};

export default App;
