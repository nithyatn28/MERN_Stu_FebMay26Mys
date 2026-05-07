//Accessibility for custom clickable elements
//to make non-button element behave like a accessible button
export function Accessibility() {
    const handelClick = () =>{
        alert('Custom button clicked');
    };
    return(
        <section>
            <h2>Accessibility</h2>
            <div role="button" tabIndex={0} onClick={handelClick} style={{padding:'20px',backgroundColor:'blue'}}>
                custom accessable button 
            </div>
            <button onClick={handelClick}>Real button</button>
        </section>
    )
}