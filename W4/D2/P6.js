const livepassword = document.getElementById("livepassword");
const message = document.getElementById("message");

livepassword.addEventListener("input", function () {

    const password = livepassword.value;  

    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters";
        message.style.color = "red";

        return;
    }

    if (!/[A-Z]/.test(password)) {
        message.textContent = "Password must contain 1 uppercase letter";
        message.style.color = "red";
        return;
    }

    if (!/[a-z]/.test(password)) {
        message.textContent = "Password must contain 1 lowercase letter";
        message.style.color = "red";
        return;
    }

    if (!/\d/.test(password)) {
        message.textContent = "Password must contain 1 number";
        message.style.color = "red";
        return;
    }

    if (!/[@#$%&*!]/.test(password)) {
        message.textContent = "Password must contain 1 special character";
        message.style.color = "red";
        return;
    }

    message.textContent = "Strong Password ";
    message.style.color = "green";
});