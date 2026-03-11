const existingBtn = document.getElementById("existingPostBtn");
const missingBtn = document.getElementById("missingPostBtn");
const statusOutput = document.getElementById("statusOutput");

function fetchPost(url){
    statusOutput.textContent = "Fetching from " + url;

    return fetch(url); 
}


existingBtn.addEventListener("click", function () {

    fetchPost("https://jsonplaceholder.typicode.com/posts/1")

    .then(function(response) {
        statusOutput.textContent = "Status: " + response.status;

        if (!response.ok) {
            throw new Error("HTTP error Status Code: " + response.status);
        }

        return response.json();
    })

    .then(function(data) {
        statusOutput.textContent += " | Success: " + JSON.stringify(data, null, 2);
    })

    .catch(function(error) {
        statusOutput.textContent = "Error: " + error.message;
    });

});


// Fetch missing post
missingBtn.addEventListener("click", function () {

    fetchPost("https://jsonplaceholder.typicode.com/posts/101")

    .then(function(response) {
        statusOutput.textContent = "Status: " + response.status;

        if (!response.ok) {
            throw new Error("Post not found");
        }

        return response.json();
    })

    .then(function(data) {
        statusOutput.textContent += " | Title: " + data.title;
    })

    .catch(function(error) {
        statusOutput.textContent = "Error: " + error.message;
    });

});