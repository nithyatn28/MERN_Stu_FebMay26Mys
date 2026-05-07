//common form patterns
//controlled component

import { useState } from "react";

//A form input whose value is controlled by the react state
export function FromsPatterns(){
    const [name,setName] = useState('');
    const [submittedName,setSubmittedName] = useState('');
    //inputHandler
    const handleChange = (event) =>{
        setName(event.target.value)
    }
    //form submit handler
    const handelSubmit = (event)=>{
        event.preventDefault();
        submittedName(name);
    };
    return(
        <section>
            <h2>Form Pattren</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" value={name} onChange={handleChange} placeholder="Enter your name"></input>
                <button type="submit">Submit</button>
            </form>
            <p> You typed the name as:{name}</p>
            <p>Submittted:{submittedName}</p>
        </section>
    );
}
