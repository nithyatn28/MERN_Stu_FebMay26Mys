//Updating objects and arrays
import { useState } from "react";

export function UpdatingObjectsArraysState(){
    //user state
    const [user,setUser] = useState({
        name:"Nithya",
        skill:"React"
    });
    const UpdateSkill = () =>{
        setUser({
            ...user,//copies all existing properties(name,skill)
            skill:'Advanced React'
        });
    };
    return(
        <>
          <h2>Updating objects state</h2>
          <p>{user.name}- {user.skill}</p>

          <button onClick={UpdateSkill}>Update skill</button>
        </>
    )

}