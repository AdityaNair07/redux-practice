import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state);
  return (
    <>
      <button onClick={useDispatch("INCREMENT")}>Increment</button>
      <div>{count}</div>
      <button onClick={useDispatch("DECREMENT")}>Decrement</button>
    </>
  );
};

export default Counter;
