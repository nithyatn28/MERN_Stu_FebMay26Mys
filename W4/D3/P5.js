const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");

introBtn.addEventListener("click",function(){
    output.textContent = "sending request..";
    fetch("https://jsonplaceholder.typicode.com/posts/28")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Raw response object :",data);
        //output.textContent = "status: " + response.status +"\nok: "+response.ok;
        output.textContent = JSON.stringify(data,null,2);
    })
    .catch(function(error){
        output.textContent = "unexpected fetch error" + error.message;
        console.log(error);
    });
});