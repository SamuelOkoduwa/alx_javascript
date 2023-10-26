function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return null;
}

function setCookies() {
    const firstNameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');

    const firstName = firstNameInput.value;
    const email = emailInput.value;

    setCookie('firstname', firstName, 30); // Set the 'firstname' cookie for 30 days
    setCookie('email', email, 30); // Set the 'email' cookie for 30 days

    // Clear input fields after setting cookies
    firstNameInput.value = '';
    emailInput.value = '';

    alert('Cookies set successfully!');
}

function showCookies() {
    const cookieDisplay = document.getElementById('cookieDisplay');
    const firstNameCookie = getCookie('firstname');
    const emailCookie = getCookie('email');

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Cookies:<br>Firstname: ${firstNameCookie || 'N/A'}<br>Email: ${emailCookie || 'N/A'}`;
    cookieDisplay.innerHTML = '';
    cookieDisplay.appendChild(paragraph);
}


const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
    },
};
