let yosh = 17;

let natija = yosh >= 18 ? "Voyaga yetgan" : "Voyaga yetmagan";
console.log(natija);

let ball = 76;

let result = ball >= 90 ? "A'lo" : ball >= 70 ? "Yaxshi" : ball >= 60 ? "Qoniqarli" : "Qoniqarsiz";
console.log(result);



let carname = "Cadillac";
let cannameresult = carname.split(" "); // string ni array ga aylantiradi
console.log(carname.toUpperCase());

console.log(cannameresult);

// toFixed
let price = 125.5970;

console.log(price.toFixed(1));

// number
let age = "18";

console.log(Number(age));
console.log(typeof Number(age));

// preseInt
let number = "25.895424";

console.log(parseInt(number));

// parseFloat
let numberp = "25.89567";

console.log(parseFloat(numberp));

// is NaN
console.log(isNaN(25)); 
console.log(isNaN("Alisher"));

// is integer
console.log(Number.isInteger(23));
console.log(Number.isInteger(2.3));

// mathRound Sonni eng yaqin butun songa yaxlitlaydi.
console.log(Math.round( 4.4)); // 4
console.log(Math.round(4.7)); // 5

// floor
console.log(Math.floor(4.9)); // 4

// ciel
console.log(Math.ceil(4.1)); // 5

// trunc. kasr qismni olib tashlaydi
console.log(Math.trunc(4.9)); // 4

// random
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);


console.log(Math.max(10, 50, 30)); // 50

console.log(Math.min(10, 50, 30)); // 10


let numbers = [45, 12, 89, 34, 67, 23];
console.log(Math.max(...numbers));


let text = `
Ism: Alisher 
Familiya: Qobilov
Kasb: Backend Developer
Til: JavaScript
`;

console.log(text);

function studentInfo(name, age, score) {
    let status;

    if (score >= 90) {
    status = "excelent";
    
} else if (score >= 70) {
    status = "good";
    
} else if (score >= 60) {
    status = "avarage";
    
} else {
    status = "failed";
}

    return `STUDENT INFORMATION
name: ${name} 
age: ${age} 
score: ${score}
status: ${status}`;
}
console.log(studentInfo("Alisher", 18, 95));

// globalscope
let name = "Alisher";

function sayHello() {
    console.log(name);
}

sayHello();

console.log(name);

// local scope
function sayHello() {
    let namesc = "Alisher";

    console.log(namesc);
}

sayHello();

// hato yozilish  console.log(namesc);

// block scope
if (true) {
    let name = "Alisher";
    const age = 18;

    console.log(name);
    console.log(age);
}

// hato variant
// if (true) {
//     let nameh = "Alisher";
// }

// console.log(nameh);


function greet(namecall, callback) {
    console.log("Hello, " + namecall);
    callback();
}
function bye() {
    console.log("Bye!");
}
bye("Alisher", bye)

// continue and nasted loops
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

for (let j = 1; j <= 20; j++) {
    if (j % 5 === 0) {
        continue;
    }
    console.log(j);
}


for (let a = 1; a <= 5; a++){
   let stars = "";

   for (let b = 1; b <= a; b++) {
    stars += "*"
   }
   console.log(stars);
   
}

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {

        console.log(`${i} x ${j} = ${i * j}`);
        

    }
}