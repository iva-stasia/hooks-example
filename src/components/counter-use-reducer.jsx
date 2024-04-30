import { useReducer, useState } from "react";

// Define action types to maintain consistency and avoid typos
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  MULTIPLY_BY: "multiply_by",
};

// Define the initial state of the counter
const initialState = { count: 0 };

// Reducer function to handle state transitions based on dispatched actions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    case ACTIONS.MULTIPLY_BY:
      // The payload object is not required to be named "payload", but by convention, it's often named "payload"
      return { count: state.count * action.payload.multiplier };
    default:
      // Throw an error for unknown actions to catch potential bugs
      throw Error("Unknown action: " + action.type);
  }
}

export default function CounterUseReducer() {
  // Initialize state and dispatch function using the useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  // Local state to manage the multiplier input
  const [multiplier, setMultiplier] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Dispatch the MULTIPLY_BY action with the specified multiplier
    dispatch({ type: ACTIONS.MULTIPLY_BY, payload: { multiplier } });
    setMultiplier("");
  }

  return (
    <div className="counter-container">
      <div>Count: {state.count}</div>
      <div className="button-container">
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>Increment</button>
        <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>Decrement</button>
        <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="number" value={multiplier} onChange={(e) => setMultiplier(e.target.value)} />
      </form>
    </div>
  );
}
