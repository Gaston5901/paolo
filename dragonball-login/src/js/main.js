// This file contains the JavaScript code for handling the login logic, including user input validation and form submission.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (username === '' || password === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Simulate a successful login
        if (username === 'goku' && password === 'kakarot') {
            window.location.href = 'inicio.html'; // Redirect to welcome page
        } else {
            alert('Nombre de usuario o contraseña incorrectos.');
        }
    });
});