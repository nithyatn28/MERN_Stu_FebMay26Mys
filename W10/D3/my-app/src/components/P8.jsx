import { useState } from "react";

//Keyboard event in React
export function KeyboardEvent(){
    const [text,setText] = useState('');
    const [action,setAction] = useState('No action yet');
    //inputHandler
    const handleChange = (event) =>{
        setText(event.target.value)
    };
    //Keyboard eventHandler
    const handelKeyDown = (event) => {
        if(event.key === 'Enter'){
            setAction(`Submitted:${text}`);
        }
        if(event.key === 'Escape'){
            setText('');
            setAction('Input cleared');
        }
    };
    return(
        <section>
            <h2>Keyboard events</h2>
            <label htmlFor="nameInput">Type something:</label>
            <input type="text" value={text} id="nameInput" onChange={handleChange} 
                onKeyDown={handelKeyDown} placeholder="Press enter or escape" />
            <p>current input:{text}</p>
            <p>action:{action}</p>
            <button onClick={()=>setAction('Button clicked')}>Native Submit button</button>

        </section>
    )
}