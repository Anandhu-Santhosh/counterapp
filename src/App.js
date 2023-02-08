import './App.css';
import Counterfunction from "./components/Counterfunction";
import Counterclass from "./components/Counterclass";
import User from "./components/User";
import { useState } from "react";
import Employee from './components/Employee';

function App() {
  const[username,setUsername]=useState('Manu')
  const[age,setAge]=useState('23')
  return (
    <div className="App">
      <header className="App-header">
        <Counterfunction/>
        <Counterclass/>
        <User username={username} age={age}/>
        <Employee/>
      </header>
    </div>
  );
}

export default App;
