// For Signup Form
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Send data to backend
    fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Signup successful! Please login.");
            window.location.href = "index.html";
        } else {
            alert("Error: " + data.message);
        }
    });
});

// For Login Form
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Send login data to backend
    fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login successful!");
            // Redirect to the dashboard or home page
        } else {
            alert("Login failed: " + data.message);
        }
    });
});
