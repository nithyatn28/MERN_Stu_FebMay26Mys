const asyncFetchBtn = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");
const postIdInput = document.getElementById("postIdInput");
 
asyncFetchBtn.addEventListener("click",
    async function(){
    //output.textContent = "loading user";
    try{
        output.textContent = "fetching post";
        const id = postIdInput.value.trim();
        if(id===""){
            output.textContent = "post id is requried"; 
            return ;
        }
        const numericId = Number(id);
        // if(numericId <=100 && numericId >=1){
        //     output.textContent = "valid"; 
        //     return ;
         //}
        if(numericId >100 | numericId <=0){
            output.textContent = "invalid"; 
            return ;
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/"
            +numericId);
        if(!response.ok) throw new Error("Http error"+response.status);
        const data = await response.json();
        output.textContent = JSON.stringify(data,null,2);

    }
    catch(error){
        output.textContent = "ERROR:"+error.message;
    }
});