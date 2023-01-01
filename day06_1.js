const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const GREETING = "hidden";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(GREETING);
    const userName = loginInput.value;
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(GREETING);
    
}


loginForm.addEventListener("submit", onLoginSubmit);