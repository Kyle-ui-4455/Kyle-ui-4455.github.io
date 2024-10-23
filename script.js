// Save the sample username and password as constants
const SAMPLE_USERNAME = "User";
const SAMPLE_PASSWORD = "sample11";  // At least 8 characters

let loginAttempts = 0;

// Login validation
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Validate if the password is at least 8 characters long
    if (password.length < 8) {
        document.getElementById("errorMsg").innerText = "Password must be at least 8 characters long!";
        return;
    }

    // Check if the username and password match the constants
    if (username === SAMPLE_USERNAME && password === SAMPLE_PASSWORD) {
        window.location.href = "products.html";  // Redirect to products page
    } else {
        loginAttempts++;
        document.getElementById("errorMsg").innerText = "Invalid credentials. Try again.";

        // Redirect to an error page after 3 failed attempts
        if (loginAttempts >= 3) {
            window.location.href = "error.html";
        }
    }
});
