// import { LoginRequest, NotesDto } from "./models.js";

const baseUrl = "https://localhost:7071/api";
const loginForm = document.getElementById("loginForm");
const notesMenu = document.getElementById("notesMenu");
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

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        return;
    }

    const loginDto = new LoginRequest(username, password)
    const response = await fetch(`${baseUrl}/Users/login`, {
        method: "POST",
        body: JSON.stringify(loginDto),
        headers: {
            "Content-Type": "text/json"
        }
    })

    if (response.ok) {
        const result = await response.json();
        if (result?.token) {
            localStorage.setItem("token", result.token)
        }
        // call function to show Note Menu
    }
});


