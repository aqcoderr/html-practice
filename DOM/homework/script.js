const form = document.querySelector("#loginform")
const username = document.querySelector("#username");
const showbtn = document.querySelector("#showbtn");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    result.textContent = "Salom" + " " +  username.value

})

const text = document.querySelector("#change");
const changebtn = document.querySelector("#changebtn");

changebtn.addEventListener("click", () => {
    if (text.textContent === "Defult text") {
        text.textContent = "Changed text";
        text.style.color = "green";   
    }else{
        text.textContent = "defult text";
        text.style.color = "black";
    }
});
