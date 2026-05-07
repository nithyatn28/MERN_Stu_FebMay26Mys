import { useCallback, useState,memo } from "react";

//useCallback with Event Handlers
const ChildButton = memo(function ChildButton({onClick}){
    console.log("ChildButton rendered");

    return(
        <button onClick={onClick}>Increment</button>

    );
});

export function UseCallbackEvents(){
    const [count,setCount] = useState(0);
    const handelClick = useCallback(()=>{
        setCount((prevCount) => prevCount +1);
    },[]);
    return(
        <section>
            <h2>useCallback in eventes example</h2>
            <p>Count: {count}</p>
            <ChildButton onClick={handelClick}></ChildButton>
        </section>
    );
}