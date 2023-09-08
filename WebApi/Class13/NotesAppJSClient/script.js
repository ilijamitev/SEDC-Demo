import { LoginRequest, PriorityEnum, TagEnum } from "./models.js"; // in order for this to work you need to start the web page with Live Server

// DEFINING VARIABLES

const baseUrl = "https://localhost:7071/api";

const loginMenu = document.getElementById("loginMenu");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const loginError = document.getElementById("loginError");
const loginBtn = document.getElementById("loginBtn");

const notesMenu = document.getElementById("notesMenu");
const getNotesBtn = document.getElementById("getNotesBtn");

let btnHoverToggle = true;

// DEFINING EVENTS

usernameInput.addEventListener("input", () => {
    usernameError.textContent = "";
    loginError.textContent = "";
})

passwordInput.addEventListener("input", () => {
    passwordError.textContent = "";
    loginError.textContent = "";
})

loginBtn.addEventListener("mouseover", validateCredentials)
loginBtn.addEventListener("click", loginUser);
getNotesBtn.addEventListener("click", getNotes);

// DEFINING FUNCTIONS

function validateCredentials(e) {
    e.preventDefault();
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
            loginBtn.classList.remove("move-left");
            loginBtn.classList.add("move-right");
            btnHoverToggle = false;
        }
        else {
            loginBtn.classList.remove("move-right");
            loginBtn.classList.add("move-left");
            btnHoverToggle = true;
        }
    }
    else {
        loginBtn.classList.remove("move-left");
        loginBtn.classList.remove("move-right");
    }
}

async function loginUser(){
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
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        loginError.textContent = "Invalid credentials!";
        return;
    }
    const result = await response.json();
    if (result?.token) {
        localStorage.setItem("token", result.token)
    }
    showNotesMenu();
}

function showNotesMenu() {
    loginMenu.setAttribute("hidden", "hidden");
    notesMenu.removeAttribute("hidden");
}

async function getNotes() {
    const token = localStorage.getItem("token");
    if (!token) {
        return;
    }
    const response = await fetch(`${baseUrl}/Notes`, { // /get
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (response.ok) {
        const data = await response.json();
        renderNotes(data);
    }
}

function renderNotes(notes) {
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";
    if (!notes) {
        notesContainer.innerHTML = `<div class="text-warning text-center">No notes available !</div>`;
        return;
    }
    for (const note of notes) {
        notesContainer.insertAdjacentHTML("beforeend", createNoteCardHtml(note))
    }
}

function createNoteCardHtml(note) {
    return `
        <div class="col-md-4">
            <div class="card mb-3">
                <div class="card-body">
                    <p>Text: ${note.Text}</p>
                    <p>Priority: ${PriorityEnum[note.Priority]}</p>
                    <p>Priority: ${note.Priority}</p>
                    <p>Tag: ${TagEnum[note.Tag]}</p>
                    <p>Tag: ${note.Tag}</p>
                    <p>User: ${note.UserFullName}</p>
                </div>
            </div>
        </div>
    `;
}
