let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to handle user registration
function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert('Username already exists.');
        return;
    }

    // Mocking password hashing (replace with proper hashing in real project)
    const hashedPassword = hashPassword(password);

    // Store user data
    users.push({ username, password: hashedPassword });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully!');
    window.location.href = 'loginpage.html'; // Redirect to login page
}

// Function to handle user login
function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username);
    if (!user) {
        alert('Username not found.');
        return;
    }

    // Mocking password verification (replace with proper verification in real project)
    if (verifyPassword(password, user.password)) {
        alert('Login successful!');
        window.location.href = 'secured.html';
    } else {
        alert('Incorrect password.');
    }
}

// Mock functions for password hashing and verification (replace with proper methods)
function hashPassword(password) {
    // Mock hash function (for demonstration)
    return password.toUpperCase(); // Replace with bcrypt or similar in real project
}

function verifyPassword(password, hashedPassword) {
    // Mock verification function (for demonstration)
    return password.toUpperCase() === hashedPassword;
}

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', registerUser);
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', loginUser);
    }
});
