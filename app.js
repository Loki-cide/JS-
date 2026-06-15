const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    console.log("", usernameValue);
    console.log("", emailValue);
    console.log("", passwordValue);
    console.log("", confirmPasswordValue);

    if (usernameValue === '') {
        showError(username, 'Username is required');
    }
    else {
        showSuccess(username);
    }

    if (emailValue === '') {
        showError(email, 'Email is required');
    }
    else {
        showSuccess(email);
    }

    if (passwordValue === '') {
        showError(password, 'Password is required');
    }
    else {
        showSuccess(password);
    }

    if (confirmPasswordValue === '') {
        showError(confirmPassword, 'Password is required');
    }
    else {
        showSuccess(confirmPassword);
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
    formControl.classList.add('success');
}