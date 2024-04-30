import { useState } from "react";

// Function to initialize count
function initCount() {
  console.log("Initial function");
  return 0;
}

export default function CounterUseState() {
  // Example 1: Initialize count with a constant value
  // Pros: Simple and straightforward.
  // Cons: Can't compute initial state dynamically, and if the component re-renders frequently,
  // the value will be initialized during each re-render, which might be inefficient for large data sets.
  const [count, setCount] = useState(0);

  // Example 2: Initialize count with a function
  // Pros: Allows dynamic computation of initial state, useful for initializing state based on
  // complex calculations or external factors.
  // Cons: Extra function invocation for initial state, which might lead to slight performance overhead.
  // const [count, setCount] = useState(initCount);

  // Example 3: Initialize count with a function call
  // Pros: Dynamic computation of initial state without the need for an extra function.
  // Cons: Function is immediately called during component initialization, which might cause unintended side effects
  // or performance issues if the initialization function performs heavy computations.
  // To solve this, you may pass it as an initializer function instead (as in the example 2).
  // const [count, setCount] = useState(initCount());

  // Example 4: Initialize count with an object containing count and smile
  // const [smilingCount, setSmilingCount] = useState({
  //   count: 0,
  //   smile: ":)",
  // });

  // Initialize user object state
  // Always ensure to pass an initial state to avoid potential errors
  // if you are going to use it as in the `buttonTextWithSmile` variable.
  const [user, setUser] = useState({});

  // Example 1: Updating count using the current value
  function handleClick() {
    setCount(count + 1);
  }

  // Example 2: Updating count using functional update. Here we want to increase by 1 twice.
  // Here, `(prevCount) => prevCount + 1` is your updater function. It takes the pending state and calculates the next state from it.
  // If you use `count + 1` here, as the result of the `handleClick` function we will increase the count only by 1,
  // because calling the set function does not update the count state variable in the already running code.
  // function handleClick() {
  //   setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);
  // }

  // Example 3: Updating count and other properties in an object state using functional update.
  // In React, state is considered read-only, so you should replace it rather than mutate your existing objects.
  // function handleClick() {
  // setSmilingCount((prevCount) => ({
  //   ...prevCount,
  //   count: prevCount.count + 1,
  // }));
  // }

  // Example 1: Dynamic button text using count state
  const buttonText = `You pressed me ${count} times`;

  // Example 2: Dynamic button text using count and first name from user state.
  // Remember to pass an initial state (at least an empty object) and use an optional chaining operator
  // to avoid potential errors.
  // const buttonTextWithUser = `${user.names?.firstName} pressed me ${count} times`;

  return <button onClick={handleClick}>{buttonText}</button>;
}
