const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submit");
let btnHoverToggle = true;

usernameInput.addEventListener("input", () => {
    usernameError.textContent = "";
})

passwordInput.addEventListener("input", () => {
    passwordError.textContent = "";
})

submitBtn.addEventListener("mouseover", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    usernameError.textContent = "";
    passwordError.textContent = "";

    if (!username) {
        usernameError.textContent = "Please enter a username.";
    }

    if (!password) {
        passwordError.textContent = "Please enter a password.";
    }

    if (!username || !password) {
        if (btnHoverToggle) {
            submitBtn.classList.remove("move-left");
            submitBtn.classList.add("move-right");
            btnHoverToggle = false;
        }
        else {
            submitBtn.classList.remove("move-right");
            submitBtn.classList.add("move-left");
            btnHoverToggle = true;
        }
    }
    else {
        submitBtn.classList.remove("move-left");
        submitBtn.classList.remove("move-right");
    }
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); 

    const username = usernameInput.value;
    const password = passwordInput.value;

    usernameError.textContent = "";
    passwordError.textContent = "";

    if (username && password) {
        alert("Login successful!"); // For demonstration purposes
    }
});