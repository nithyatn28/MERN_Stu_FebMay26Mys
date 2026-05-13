import {useState, useEffect } from "react";

//useEffect Lifecyle
//No array:every render
//[]-once
//[state]- on mount + when state changes
export function UseEffectLifecycle(){
    const [count, setCount] = useState(0);
    //No dependency array
    useEffect(()=>{
        console.log("Effect 1: runs after every render");
    });
    //empty dependecy array
    //this runs only once after the component mounts
    useEffect(()=>{
        console.log("Effect 2: runs only once after the component mount");
    },[]);
    //3.dependecy based effect
    useEffect(()=>{
        console.log("Effect 3: count changed to", count);
        return()=>{
            console.log("Cleanup for effect 3:  count was",count);
        };
    },[count]);
    //Event handler
    function handleIncrement(){
        setCount(prevCount => prevCount + 1);
    }
    function handleReset(){
        setCount(0);
    }
    return(
        <section>
            <h2>useEffect lifecycle</h2>
            <p>count:{count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    )

}