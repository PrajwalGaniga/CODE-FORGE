document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic Validation
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Example of sending login details to a server (replace with actual implementation)
    console.log("Logging in with", { email, password });

    // Simulate successful login
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect to the homepage
});
