import logo from './logo.svg';
import {useState} from "react" ;
import './App.css';


function App() {
  const [name , setName]=useState("") // local state for text  input
  const handleSubmit=(e) => {
    e.preventDefault();
    setName("")
    console.log("Form submitted! " )
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}> 
        <fieldset>
          <div className="field">
            <label htmlFor='name'> Name </label>
            <input id ="name"type="text" placeholder="name" name="name" value={name} onChange={e  => setName(e.target.value)}/> 
          </div>
          <button disabled={!name} type="submit">Submit </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
