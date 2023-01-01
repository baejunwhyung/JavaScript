const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function handleLoginButton(event){
   event.preventDefault();
   console.log(loginInput.value);
    
}

function handleLink(event){
    event.preventDefault();
    console.dir(event);
}

link.addEventListener("click", handleLink);
loginForm.addEventListener("submit", handleLoginButton);