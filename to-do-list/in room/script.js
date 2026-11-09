// const card = document.querySelector("#card");
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {
//   card.classList.toggle("dark");
//   card.classList.toggle("light");
// });


// const newParagraph = document.createElement("p");
// newParagraph.textContent = "Bu JavaScript yaratgan paragraf!";
// console.log("Js ishlayapdi");




const card = document.querySelector("#card");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    card.classList.toggle("color");
    card.classList.toggle("colorsecond");
});


const h1 = document.querySelector(".h");
h1.textContent = "Men DOMni o'rganyapman!";


const div = document.querySelector(".div");
div.innerHTML = "<h1>This is heading</h1> <p>This is paragraph</p>";

const list = document.querySelector("#list")
const item = document.createElement("h1");

item.textContent = "Js yaratgan heading";

list.append(item);

const itemfirst = document.createElement("h1");

itemfirst.textContent = "Js yaratgan heading1";

list.prepend(itemfirst);

const deleteme = document.querySelector("h1");

deleteme.remove();
