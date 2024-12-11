document.getElementById('producerRegisterForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents the default form submission

    // Capture form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation: check if fields are empty
    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    // Make a POST request to FastAPI to register the producer
    fetch("http://127.0.0.1:8000/register_producer/", {
        method: "POST",  // POST method to send data
        headers: {
            "Content-Type": "application/json"  // Sending JSON data
        },
        body: JSON.stringify({
            name,  // Send producer name
            email, // Send producer email
            password // Send producer password
        })
    })
    .then(response => response.json())  // Parse the response from FastAPI
    .then(data => {
        alert(data.message || "Producer registered successfully!");
        window.location.href = "producer-login.html"; // Redirect to producer login page
    })
    .catch(err => {
        console.error("Error:", err);
        alert("Error registering producer");
    });
});
