document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("formTitle");
    const emailContainer = document.getElementById("emailContainer");
    const forgetPassword = document.getElementById("forgetPassword");
    const messageElement = document.getElementById("message");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submitButton");
    const signInAction = document.getElementById("signInAction");
    const signUpAction = document.getElementById("signUpAction");
    const registrationForm = document.getElementById("registrationForm");

    let action = "Sign In";

    const toggleForm = () => {
        if (action === "Sign In") {
            action = "Sign Up";
            formTitle.textContent = "Sign Up";
            emailContainer.style.display = "block";
            forgetPassword.style.display = "none";
            submitButton.textContent = "Register";
        } else {
            action = "Sign In";
            formTitle.textContent = "Sign In";
            emailContainer.style.display = "none";
            forgetPassword.style.display = "block";
            submitButton.textContent = "Login";
        }
        messageElement.textContent = ''; // Clear message on toggle
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        try {
            if (action === "Sign In") {
                // Call your login API here
                const user = await login(username, password); // Implement the login function
                console.log("User logged in:", user);
                // Redirect to the main page or perform actions on success
            } else {
                // Call your registration API here
                await register(username, email, password); // Implement the register function
                action = "Sign In";
                toggleForm(); // Switch back to Sign In form
                messageElement.textContent = 'Successfully Registered';
            }
        } catch (error) {
            messageElement.textContent = 'Error: ' + error.message; // Display error message
        }
    };

    // Event Listeners
    registrationForm.addEventListener("submit", handleSubmit);
    signInAction.addEventListener("click", () => { action = "Sign In"; toggleForm(); });
    signUpAction.addEventListener("click", () => { action = "Sign Up"; toggleForm(); });
});
