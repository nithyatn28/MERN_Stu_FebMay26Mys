// Error boundary & file upload progress
//Error boundary: it is a special class component tree and shows a fallback UI
//Error boundary does not catch 
  //1.errors inside event handlers
  //2.error inside setTimeout/setInterval
  //3.error inside async code etc
  //4 It is used only for "rendering and lifecycle methods errors"

import React,{ useEffect, useState, useRef} from "react";

  class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);

    
    this.state ={
        hasError:false,
        errorMessage:"",
    };

  }
//Lifecycle Method updates the state when a child tthrows an error during rendering
static getDerivedStateFromError(error){
    return{
        hasError:true,
        errorMessage:error.message || "Something went wrong"
    };
}

componentDidCatch(error, errorInfo){
    // Log the error for debugging purposes
    console.error("Error caught by boundary:", error, errorInfo);
}
render (){
    if(this.state.hasError){
        return(
            <section>
                <h2>Somthing went Wrong</h2>
                <p>{this.state.errorMessage}</p>
            </section>
        );
    }
    return this.props.children;
  }
}

function UploadComponent(){
    const [progress, setProgress]  = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const intervalRef = useRef(null);

    useEffect(()=>{
        return()=>{
            clearInterval(intervalRef.current);
        };
    },[]);

    function startUpload(){
        if(isLoading){ // If uploading is already running, then do nothing
            return;
        }
        setProgress(0);
        setIsLoading(true);

        intervalRef.current = setInterval(()=>{
            setProgress((prevProgress)=>{
                const nextProgress = prevProgress + 10;
                if(nextProgress >= 100){
                    clearInterval(intervalRef.current);
                    setIsLoading(false);
                    return 100;
                }
                return nextProgress;
            });
        },300);
    }
    function resetUpload(){
        clearInterval(intervalRef.current);
        setProgress(0);
        setIsLoading(false);

    } 
    return(
        <section>
            <h2>File Upload & error boundaries</h2>
            <button onClick={startUpload} disabled={isLoading}>{isLoading?"uploading...":"Upload File"}</button>
            <button onClick={resetUpload} disabled={isLoading && progress === 0}>Reset</button>
            <progress value={progress} max="100"></progress>
            <p>{progress}%</p>
            {progress === 100 && <p>Upload complete.</p>}
        </section>
    );
}
export function UploadErrorBoundary(){
    return(
        <ErrorBoundary>
            <UploadComponent />
        </ErrorBoundary>
    );
}