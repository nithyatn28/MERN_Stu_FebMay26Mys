function tagPassword(password) {

    if (typeof password !== string) {
        console.log("INVALID");
    }
    else {
        console.log("STRING");
    }
}
    let password = "ABC";
    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i <= password.length; i++) {
        let ch = password[i];
        if (ch >= 'A' && ch <= 'Z') {
            hasLetter = true;
        }

        if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
    }
    if (password.length < 8) {
        console.log("WEAK");
    }

    if (password.length >= 12 && hasLetter && hasNumber) {
        console.log("STRONG");
    }

    if (hasLetter && hasNumber) {
        console.log("MEDIUM");
    }

