document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const feedback = document.getElementById('passwordFeedback');

    if (password.length > 8) {
        feedback.textContent = 'Password is valid.';
        feedback.classList.add('valid');
        feedback.classList.remove('feedback');
    } else {
        feedback.textContent = 'Password must be more than 8 characters.';
        feedback.classList.add('feedback');
        feedback.classList.remove('valid');
    }
});

document.getElementById('passwordForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const feedback = document.getElementById('passwordFeedback');

    if (password.length <= 8) {
        feedback.textContent = 'Password must be more than 8 characters.';
        feedback.classList.add('feedback');
        feedback.classList.remove('valid');
        event.preventDefault(); // Prevent form submission
    } else if (password !== confirmPassword) {
        feedback.textContent = 'Passwords do not match.';
        feedback.classList.add('feedback');
        feedback.classList.remove('valid');
        event.preventDefault(); // Prevent form submission
    } else {
        feedback.textContent = 'Form submitted successfully.';
        feedback.classList.add('valid');
        feedback.classList.remove('feedback');
    }
});