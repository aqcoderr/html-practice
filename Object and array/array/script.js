// 1-vazifa
const fruits = ["olma", "nok", "o'rik", "shaftoli", "uzum"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[4]);


fruits.push("ananas");
fruits.shift();
fruits.includes("osrs");
console.log(fruits.length);
console.log(fruits[fruits.length-1]);


const scores = [45, 78, 90, 52, 66, 39, 84];
let a = scores.filter(score => score >= 60);
console.log(a);

let b = scores.find(num => num >= 80);
console.log(b);

let c = scores.some(some => some >= 90);
console.log(c);



const prices = [12000, 25000, 18000, 40000];
const results = prices.map(numbers => {
    return numbers + 5000;
})
console.log(results);

let w = prices.filter(score => score >= 20000);
console.log(w);

const totalprice = prices.reduce((sum, price) => sum + price, 0);
console.log(totalprice); 


const students = ["Ali", "Vali", "Sami", "Malika", "Aziza"];
console.log(students.includes("Malika"));
console.log(students.indexOf("Sami"));

let studentsresult = students.slice(0, 3);
console.log(studentsresult);

const products = ["non", "sut", "olma", "guruch", "tuxum"];
products.splice(2, 1, "Banan");
console.log(products);

console.log(products.reverse());


const studentsobj = [
  { name: "Ali", age: 17, score: 85 },
  { name: "Vali", age: 15, score: 58 },
  { name: "Malika", age: 18, score: 92 },
  { name: "Sami", age: 16, score: 73 }
];
console.log(studentsobj);

let m = studentsobj.filter(ball => ball.score >= 70);
console.log(m);

let yosh = studentsobj.find(age => age.age === 18)
console.log(yosh);

console.log(studentsobj.map(map => map.name));

console.log(studentsobj.every(check => check.score > 50));
