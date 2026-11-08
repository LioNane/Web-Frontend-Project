document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();

            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');

            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity("Passwords do not match.");
            } else {
                confirmPassword.setCustomValidity("");
            }

            if (form.checkValidity()) {
                const firstName = document.getElementById('firstName').value;
                alert(`Welcome to the Grand Line, ${firstName}! Your registration is successful.`);
                
                form.reset();
                form.classList.remove('was-validated');
            } else {
                form.classList.add('was-validated');
            }
        }, false);
        
        form.addEventListener('reset', () => {
            form.classList.remove('was-validated');
            document.getElementById('confirmPassword').setCustomValidity("");
        });
    }
});