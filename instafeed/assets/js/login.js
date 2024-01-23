function processLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var loginData = {
        email: email,
        password: password
    };

    // Convert the object to a JSON string and display it
    var resultElement = document.getElementById('result');
    resultElement.textContent = JSON.stringify(loginData, null, 2);
}
