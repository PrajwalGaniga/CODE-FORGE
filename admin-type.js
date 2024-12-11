function redirectTo(userType) {
    if (userType === 'user') {
        window.location.href = "user-login.html";
    } else if (userType === 'admin') {
        window.location.href = "admin-login.html";
    } else if (userType === 'producer') {
        window.location.href = "producer-login.html";
    } else {
        alert("Invalid selection!");
    }
}
