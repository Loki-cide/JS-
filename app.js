const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === '') {
        showError(username, 'Username is required');
    } 
    else {
        showSuccess(username);
    }
}

function showError(input, message) {
    const formControl = input.parentElement;

    const error = formControl.querySelector('.error-message');
    error.innerText = message;
    error.style.display = 'block';
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}