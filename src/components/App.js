
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input onChange={(e) => setName(e.target.value)}></input>
        {name !== "" && <p>Hello {name}!</p>}
    </div>
  )
}

export default App;
