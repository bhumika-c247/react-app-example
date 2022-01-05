import { useState } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';

const FunctionalComponent = () => {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  console.log('params-----', params);
  console.log('location-----', location);
  console.log('history-----', history);
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
