document.getElementById('userLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents default form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert("Both fields are required!");
        return;
    }

    fetch("http://127.0.0.1:8000/login_user/", {
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
            window.location.href = "user-dashboard.html";  // Redirect to user dashboard
        }
    })
    .catch(err => {
        alert("Login failed: " + err.message);
    });
});
