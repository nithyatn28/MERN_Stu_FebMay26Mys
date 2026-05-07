//Synthetic event vs Native DOM events
//Synthetic event:A wrapper created by React around the browser's native event
//Gives a consistent API across browsers
//works similarly to nativeDOM events
//stillallow access to the original browser events via 
//event.nativeEvent
//Why does React use it?
//To make event handling behave consistently
//to simplify cross-browser diffrences
//to integrate smoothly with React's event system

//how Synthetic event works:
//components renders:
//A button appars on the screen
//handelClick is defined but it is not executed
//user Clicks the button:
//Browser creates a native event in a SyntheticEvent
//React passes the syntheticEvent to handelClick

//event refers to the syntheticEvent
//event.target gives us the HTML 