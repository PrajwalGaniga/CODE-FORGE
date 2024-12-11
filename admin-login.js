document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents the default form submission

    // Capture form data
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation: check if fields are empty
    if (!email || !password) {
        alert("Both fields are required!");
        return;
    }

    // Make a POST request to FastAPI to log in as admin
    fetch("http://127.0.0.1:8000/admin_login/", {
        method: "POST",  // POST method to send data
        headers: {
            "Content-Type": "application/json"  // Sending JSON data
        },
        body: JSON.stringify({
            email,  // Send admin email
            password // Send admin password
        })
    })
    .then(response => response.json())  // Parse the response from FastAPI
    .then(data => {
        alert(data.message || "Admin login successful!");
        window.location.href = "admin-dashboard.html"; // Redirect to admin dashboard
    })
    .catch(err => {
        console.error("Error:", err);
        alert("Invalid admin credentials");
    });
});
