import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "./redux/counter";
import "./styles.css";

export default function App() {
  const { count } = useSelector((state) => state.counter);

  //useSelector is going to be replace our state, what we're saying here is we want to read this variable from this reducer

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 10
      </button>
      <button onClick={() => dispatch(decrementByAmount(10))}>
        Decrement by 10</button>
    </div>
  );
}

/*
to call an action from our reducer we have to use the useDispatch Hook

now just pass in our action from our reducer within the dispatch


within our incrementByAmount remember we passed in action as well? we can make that either a value / object
  and so when we pass in 10 we are incrementing/decrementing by that amount (10 is the payload)

*/
