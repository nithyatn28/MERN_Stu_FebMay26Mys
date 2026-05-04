//import { initial } from "lodash";
import { useState } from "react";
//useState Basics
//Its a react hook that adds state to functional component
//return an array with 2 value 
//1.Current state value
//2.Function to update state
//Syntax:
//const [stateValue,setStateValue] = useState(initialValue);

export function UseStateBasics(){
    //count
    const [count,setCount] = useState(0);
    //cart
    //const [cart,setCart] = useState(0);
    return(
        <>
          <h2>useStateBasics</h2>
          <p>Count: {count}</p>

          <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )


}