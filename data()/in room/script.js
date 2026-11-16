const tapToSee = document.querySelector("#taptosee");
const showText = document.querySelector("#showtext");

tapToSee.addEventListener("click", function() {
    setTimeout(function() {
        showText.textContent = "Hello Javascript !"
    }, 3000)
});



const Count = document.querySelector("#count");
const stopBtn = document.querySelector("#stopbtn");
const continueBtn = document.querySelector("#continuebtn");

let count = 0;
let timer = null;

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(() => {
    Count.textContent = count ++;
    }, 1000);
};

stopBtn.addEventListener("click", function() {
    clearInterval(timer)
    timer = null;
});

continueBtn.addEventListener("click", function() {
    startTimer();
});

startTimer();

// const hourText = document.querySelector("#hourtext");
// const minuteText = document.querySelector("#minutetext");
// const secondText = document.querySelector("#secondtext");


const dayText = document.querySelector("#daytext");
const monthText = document.querySelector("#monthtext");
const yearText = document.querySelector("#yeartext");
const clock = document.querySelector("#clock");


function lifeClock() {
    const now = new Date();

    const hourText = String(now.getHours()).padStart(2, "0");
    const minuteText = String(now.getMinutes()).padStart(2, "0");
    const secondText = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hourText}:${minuteText}:${secondText}`;
};
setInterval(lifeClock, 1000)

dayText.textContent = now.getDay();
monthText.textContent = now.getMonth() + 1;
yearText.textContent = now.getFullYear();