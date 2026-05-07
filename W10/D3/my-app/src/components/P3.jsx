import { useState } from "react";

//passing arguments to Event handlers
export function PassingArguments(){
    const [message,setMessage] =useState('No message yet');
    //Event handler function
    const handelClick = (msg) => {
        setMessage(msg);
    };
    return(
        <section>
            <h2>Passing Arguments</h2>
            <button onClick={() =>handelClick('Namaste')}>
                {/* <button onClick={handelClick('Namaste')}></button>  don't do like this ,because donot pass the parameter  without the function*/}
                Click me
            </button>
            <p>Message:{message}</p>
        </section>
    )
}