import React from "react";
import { Render_data } from "./Render_data";
import { useSelector } from "react-redux";

export const Component_02 = (props) => {
  //   const { data } = props;
  //   console.log(data);

  const state = useSelector((state) => state);

  return (
    <div>
      Component 02 Value: {state.user_data.value}
      {/* <Render_data data={data} /> */}
    </div>
  );
};
