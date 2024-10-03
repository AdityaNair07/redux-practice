import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./redux/slices";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.stuff.value);

  const stuff = useSelector((state) => state.stuff);

  const [amount1, setAmount1] = useState(0);

  console.log("====================================");
  console.log("Stuff from the store: ", stuff);
  console.log("====================================");

  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      {amount}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <label for="incrementByValue">Enter an amount:</label>
      <input
        id="incrementByValue"
        type="number"
        onChange={(e) => setAmount1(e.target.valueAsNumber)}
      />
      <button onClick={() => dispatch(incrementByValue(amount1))}>
        Add amount
      </button>
    </>
  );
}

export default App;
