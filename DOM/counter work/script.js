let count = 0;
let countText = document.querySelector("#count")

document.querySelector("#plus").addEventListener("click", () => {
    count ++;
    countText.textContent = count;
})
document.querySelector("#minus").addEventListener("click", () => {
    count --;
    countText.textContent = count;
});
document.querySelector("#reset").addEventListener("click", () => {
    count = 0;
    countText.textContent = count;
})