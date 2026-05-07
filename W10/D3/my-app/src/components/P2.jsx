//React event object
//What is It
//React automatically passes an object to event handelers
//this object contains details about the event
//eg:input field:event.target.value
//event:info about the input change
//event.target:the HTML input element

import { useState } from "react";

//event.target.value:the current text typed by the user
export function EventObject(){
    const [text,setText] = useState('');
    const handelChange = (event) =>{
        const currentValue = event.target.value;
        console.log(currentValue);
        setText(currentValue);
    };
    return(
        <section>
            <h2>EventObject</h2>
            <input type="text" value={text}
                onChange={handelChange}  placeholder="Type something"/>
            <p>You typed: {text}</p>
        </section>
    )
}