// Function to redirect to the login or registration page based on the user type
function redirectTo(userType) {
    if (userType === 'user') {
        // Redirect to user login page
        window.location.href = 'user-login.html'; // This will be the login or registration page for users
    } else if (userType === 'admin') {
        // Redirect to admin login page
        window.location.href = 'admin-login.html'; // This will be the login page for admins
    } else if (userType === 'producer') {
        // Redirect to producer login page
        window.location.href = 'producer-login.html'; // This will be the login or registration page for producers
    }
}
