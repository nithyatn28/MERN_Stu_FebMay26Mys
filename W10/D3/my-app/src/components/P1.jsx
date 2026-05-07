//Basic events in React
//What is an event
//An action trigerd by the user (mouse,keyboard,DOM)
//React uses camelCase attribute like onClick,onChange...
//React passes an event object (SyntheticEvent)to the handeler 

export function EventBasics(){
    //Declaring a event handler function
    const handelClick = () => alert("Clicked");

    return(
        <section>
            <h2>Basic events</h2>
            {/* Event binding */}
            <button onClick={handelClick}>
                Click Me
            </button>
        </section>
    );
}