import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { counter } = useSelector((state) => state.counterReducer);

  //   console.log("selector", selector);

  console.log("counter", counter);

  return (
    <div>
      Counter: <strong>{counter}</strong>
    </div>
  );
}

export default Header;
