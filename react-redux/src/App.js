import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INC' });
  };
  const decrement = () => {
    dispatch({ type: 'DEC' });
  };
  const addTen = () => {
    dispatch({ type: 'ADD', payload: 10 });
  };
  const counter = useSelector(state => {
    return state.counter;
  });
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addTen}>Add 10</button>
    </div>
  );
}

export default App;
