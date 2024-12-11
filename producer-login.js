document.getElementById('producerLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents default form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert("Both fields are required!");
        return;
    }

    // Send POST request to Producer Login API endpoint
    fetch("http://127.0.0.1:8000/login_producer/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
            window.location.href = "producer-dashboard.html";  // Redirect to producer dashboard or another page after successful login
        }
    })
    .catch(err => {
        alert("Login failed: " + err.message);
    });
});
