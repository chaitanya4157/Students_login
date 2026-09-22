const loginForm = document.getElementById("loginForm");

const studentId = document.getElementById("studentId");
const password = document.getElementById("password");

const errorMessage = document.getElementById("errorMessage");

const showPassword = document.getElementById("showPassword");


// Show / Hide Password
showPassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        showPassword.textContent = "Hide";

    } else {

        password.type = "password";
        showPassword.textContent = "Show";

    }

});


// Login Validation
loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const id = studentId.value.trim();
    const pass = password.value.trim();

    if (id === "" || pass === "") {

        errorMessage.textContent =
            "Please enter Student ID and Password.";

        return;
    }

    if (id === "STU001" && pass === "12345") {

        errorMessage.style.color = "green";

        errorMessage.textContent =
            "Login successful!";

        alert("Welcome Student!");

    } else {

        errorMessage.style.color = "red";

        errorMessage.textContent =
            "Invalid Student ID or Password.";

    }

});