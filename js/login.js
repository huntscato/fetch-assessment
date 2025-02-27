document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');  

    alert("Hunter here! Input any valid email and anything for a password and you'll be in!")

    if (!loginForm) return;
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;

        const loginData = { name, email };

        try {
            const response = await fetch('https://frontend-take-home-service.fetch.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
                credentials: 'include',
            });

            if (response.ok) {
                console.log('Login Successful!');
                window.location.href = 'dog-selection.html';
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    });
});