let selector = document.querySelector("select");
let textcolor = document.querySelector("#colortext")
let body = document.querySelector("body");

selector.addEventListener("change", (event) => {
    textcolor.textContent = "Chosen color" + " " + event.target.value + ".";
    body.style.background = event.target.value;
})