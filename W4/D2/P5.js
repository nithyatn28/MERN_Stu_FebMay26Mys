signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = signupemail.value;
    const password = signuppassword.value;

    // Email validation
    if (!email) {
        message.textContent = "Email is required";
        message.style.color = "blue";
        signupemail.focus();
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Please enter valid email id";
        message.style.color = "red";
        signupemail.focus();
        return;
    }

    // Password required
    if (!password) {
        message.textContent = "Password is required";
        message.style.color = "red";
        signuppassword.focus();
        return;
    }

    // Password length
    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters";
        message.style.color = "red";
        signuppassword.focus();
        return;
    }

    // Uppercase check
    if (!/[A-Z]/.test(password)) {
        message.textContent = "Password must have at least 1 UPPERCASE character";
        message.style.color = "red";
        signuppassword.focus();
        return;
    }

    // Lowercase check
    if (!/[a-z]/.test(password)) {
        message.textContent = "Password must have at least 1 lowercase character";
        message.style.color = "red";
        signuppassword.focus();
        return;
    }

    // Number check
    if (!/\d/.test(password)) {
        message.textContent = "Password must have at least 1 digit";
        message.style.color = "red";
        signuppassword.focus();
        return;
    }

    // Special character check
    if (!/[@#$%&*!]/.test(password)) {
        message.textContent = "Password must have at least 1 special character";
        message.style.color = "red";
        signuppassword.focus();
        return;
    }
    const confirmPassword = confirmpassword.value;

// confirm pass
if (!confirmPassword) {
    message.textContent = "Please confirm your password";
    message.style.color = "red";
    confirmpassword.focus();
    return;
}


if (password !== confirmPassword) {
    message.textContent = "Passwords do not match";
    message.style.color = "red";
    confirmpassword.focus();
    return;
}

    message.textContent = "valid email & password entered ";
    message.style.color = "green";
    console.log("success!",{email,password:"***Hidden***"});

});
//clear message on input
signupemail.addEventListener("input" ,() => message.textcontent = "");
signuppassword.addEventListener("input" ,() => message.textcontent = "");