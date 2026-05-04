//Event handling with state 
import { useState } from "react";

//In react :
//events use camelcase nameing,eg:onClick, onChange 
export function EventHandlingState(){
    const [name,setName] = useState('');

    const handeleChange = (e) =>{
        setName(e.target.value);
    };

    const handeleClick = () =>{
        alert(`hello, ${name || 'Guest'}`)
    };

    return(
        <>
          <h2> Event handling with state</h2>
          <input type="text" value={name} onChange={handeleChange} placeholder="Enter your name"></input>
          <button onClick={handeleClick}>Greet user</button>
          <p>Current input:{name} </p>
        </>
    )
}