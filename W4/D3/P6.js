const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");

introBtn.addEventListener("click",function(){
    output.textContent = "sending request..";
    fetch("https://jsonplaceholder.typicode.com/posts/28")
    .then(function(response){
        return response.text();
    })
    .then(function(text){
        console.log("text response  :",text);
        //output.textContent = "status: " + response.status +"\nok: "+response.ok;
        output.textContent = text;
    })
    .catch(function(error){
        output.textContent = "unexpected fetch error" + error.message;
        console.log(error);
    });
});