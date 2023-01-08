import logo from './logo.svg';
import './App.css';

import { useState } from 'react';


function App() {
  const [counter,setCounter] = useState(0);
   
  
  return (
    <div className="App">
      <button className="increment" onClick={()=>{let value = counter+1; console.log("increment clicked"); setCounter(value)}}>++</button>
      <p className="counterValue">{counter}</p>
      <button className="decrement" onClick={()=>{let value=counter-1; setCounter(value)}}>--</button>
    </div>
  );
}

export default App;
