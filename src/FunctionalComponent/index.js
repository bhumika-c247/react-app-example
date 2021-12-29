import { useState } from 'react';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Functional Component</h1>
      <button onClick={increaseCount}>+</button>
      {count}
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};
export default FunctionalComponent;
