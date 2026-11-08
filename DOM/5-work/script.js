const form = document.querySelector("#loginform");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const firstresult = document.querySelector("#firstresult");
const secondresult = document.querySelector("#secondresult");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    firstresult.textContent = "Username:" + " " + username.value
    secondresult.textContent = "Email:" + " " + email.value
})