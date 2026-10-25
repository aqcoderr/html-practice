for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2-vazifa
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

// 3-vazifa
let a = 1;
let sum = 0;
while (a <= 100) {
  sum += a;
  a++;
}
console.log(sum);

//for in and for of
const book = { title: "Alpomish", year: 2020, pages: 180 }
for (const key in book) {
    console.log(key);
}

const phone = { brand: "Samsung", model: "A55", price: 400 }
for (const tel in phone) {
    console.log(tel, phone [tel]);
}

const animals = ["mushuk", "it", "quyon", "ot"]
for (const animal of animals) {
    console.log(animal);
}

const numbers = [12, 5, 8, 10, 3]

let sum3 = 0;
for (const number of numbers) {
    sum3 += number;
}
console.log(sum3);

let texts = "JAVASCRIPT";

for (const text of texts) {
    console.log(text);
}

const products = [
    { name: "Daftar", price: 8000 }, 
    { name: "Ruchka", price: 3000 }, 
    { name: "Kitob", price: 25000 }
];

let total = 0;

for (const product of products) {
    console.log(product);
    total = total + product.price;
}
console.log("Total price of products:", total, "so'm");
let all = Object.entries(products)
console.log(all);




let students = {
name: "Sardor",
age: 20,
email: "sardor@gmail.com",
group: "front-end",
hobby: "football"
}
// OBJECT OPERATSIYALAR

let keys = Object.keys(students) // object keylarni array ichiga solib qaytaradi
console.log(keys);

let qiymatlar = Object.values(students) // object qiymatlarini array ichiga solib beradi
console.log(qiymatlar);

let both = Object.entries(students) // object keys va values ni array ichiga solib qaytaradi

console.log(both);