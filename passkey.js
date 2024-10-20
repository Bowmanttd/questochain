function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Basic validation
    if (email && password) {
        // Assuming validation is successful, redirect to index.html
        console.log('Login successful, redirecting to index.html');
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else if (email && password) {
        // Assuming validation is successful, redirect to index.html
        console.log('Signup successful, redirecting to index.html');
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields.');
    }
});
