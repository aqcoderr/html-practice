count = 0;
const countText = document.querySelector(".count");

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    let count = 0;

    const plus = card.querySelector(".plus");
    const minus = card.querySelector(".minus");
    const countText = card.querySelector(".count");
    const addcart = card.querySelector(".addcart");

    plus.addEventListener("click", () => {
        count++;
        countText.textContent = count;
    });

    minus.addEventListener("click", () => {
        if (count > 0) {
            count--;
            countText.textContent = count;
        }
    });

    addcart.addEventListener("click", () => {
        if (count > 0) {
            addcart.textContent = "Added ✓";
        } else {
            addcart.textContent = "Select quantity!";
        }
    });
});



















// document.querySelector(".plus").addEventListener("click", () => {
//     count++;
//     countText.textContent = count;
// });

// document.querySelector(".minus").addEventListener("click", () => {
//     count--;
//     countText.textContent = count;
// });

// document.querySelector(".addcart").addEventListener("click", () => {
//     addcart.textContent = "Added"
// });

