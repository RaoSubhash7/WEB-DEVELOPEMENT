import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter(counter + 1);
    console.log('Counter:', counter);
  };
  const subtractValue = () => {
    setCounter(counter - 1);
    console.log('Counter:', counter);
  }

  return (
    <>
      <h2>Hello Everyone Today I learned Hooks in React</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue}>Increment by 1</button>
      <button onClick={subtractValue}>Decrement by 1</button>
    </>
  );
}

export default App;