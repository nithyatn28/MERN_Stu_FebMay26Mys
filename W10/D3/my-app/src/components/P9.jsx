export function EventObj() {
    const handleParentClick = (event)=>{
        alert(`Parent clicked target: ${event.target.tagName} current targe:${event.currentTarget.tagName}`);

    };
    const handleChildClick = (event)=>{
        event.stopPropagation();
        alert(`Child clicked (propogation stopped) target: ${event.target.tagName} current targe:${event.currentTarget.tagName}`);

    };
    //form submit handler
    const handelSubmit = (event)=>{
        event.preventDefault();
        alert("Form submited safely by preventing default refresh");
    };
    const handelBoxClick = (event) =>{
        alert(`Box clicked (propogation stopped) target: ${event.target.tagName} current targe:${event.currentTarget.tagName}`);
    }
    return(
        <section onClick={handleParentClick} style={{padding:'20px',backgroundColor:'green'}}>
            <h2>Event Object</h2>
            <button onClick={handleChildClick} >child button</button>
            <button onClick={handelSubmit} >Submit Form</button>
            <div onClick={handelBoxClick} style={{padding:'20px',backgroundColor:'blue'}}>
                <span style={{padding:'20px',backgroundColor:'yellow', display:'inline-block'}}>
                    Inner span
                </span>
            </div>
        </section>
    )
}