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

let w = results.filter(score => score >= 20000);
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

// array destructuring

const numbers = [10, 20, 30, 40];

const [first, , third] = numbers; // vergul 1ta element ni tashlab ketadi

console.log(first);
console.log(third);


const user = {
    name: "Alisher"
};

const { name, age = 18 } = user;

console.log(name);
console.log(age);



const user1 = {
    name: "Alisher",
    email: "ali@gmail.com"
};

const { name: userName, email: userEmail } = user1;  //bu obyektning property nomini o‘zgartirmaydi, faqat qiymatni boshqa nomli o‘zgaruvchiga oladi.

console.log(userName);
console.log(userEmail);


const user2 = {
    name2: "Alisher",
    age: 18,

    address: {
        city2: "Andijan",
        country2: "Uzbekistan"
    }
};
// oddiy usul
// const city2 = user2.address.city2;
// const country2 = user2.address.country2;

// nested destructuring
const { name2, address: { city2, country2 } } = user2;

console.log(name2);
console.log(city2);
console.log(country2);



function total(...numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    console.log(sum);
}

total(10, 20, 30, 40);


// object assign
const user3 = {
    name: "Alisher"
};

const extra = {
    age: 18,
    job: "Developer"
};

Object.assign(user3, extra);

console.log(user3);

// Object.freeze
const user4 = {
    name: "Alisher",
    age: 18
};

Object.freeze(user4);

user4.age = 20;
user4.city = "Andijan";

delete user4.name;

console.log(user4);

// Object.seal    faqat qiymatni o'zgartirish mumikn.
const user5 = {
    name: "Alisher",
    age: 18
};

Object.seal(user5);

user5.age = 25; // Mumkin

user5.city = "Andijan"; // Mumkin emas

delete user5.name; // Mumkin emas

console.log(user5);


const user6 = {
  ism: "Alisher",
  inform: {
    car:"BMW"
  }
};

if (Object.hasOwn(user6, "ism")) {
  console.log("Ism yuborilgan");
}else{
  console.log("Ism yuborilmagan");
}

// propertyni hafsiz tekshirish
const city = user.address?.city ?? "Ma'lumot yo'q";    // ?? Nullish coalsing

console.log(city);

console.log("car" in user6.inform );