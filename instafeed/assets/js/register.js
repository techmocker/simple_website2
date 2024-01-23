function processSignup() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;

    var signupData = {
        email: email,
        password: password,
        name: name
    };

    // Convert the object to a JSON string and display it
    var resultElement = document.getElementById('result');
    resultElement.textContent = JSON.stringify(signupData, null, 2);
}
