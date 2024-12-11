document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("All fields are required!");
        return;
    }

    alert("User login successful!");
  rd
    window.location.href = "user-dashboard.html";
});
