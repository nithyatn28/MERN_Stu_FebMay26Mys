const asyncFetchBtn = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");
 
asyncFetchBtn.addEventListener("click",
    async function(){
    output.textContent = "loading user";
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok) throw new Error("Http error"+response.status);
        const data = await response.json();
        output.textContent = JSON.stringify(data,null,2);

    }
    catch(error){
        output.textContent = "ERROR:"+error.message;
    }
});