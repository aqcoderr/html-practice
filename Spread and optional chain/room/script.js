const user = {
name: "Ali",
surname: "Valiyev",
age: 20,
email: "new@mail.com"
};
const {name, surname} = user;
console.log(name, surname);

const {age} = user;
console.log(age);

const {email = "new@gmail.com"} = user;
console.log(email);



const product = {
id: 1,
name: "Laptop",
price: 1200,
brand: "HP",
inStock: true
};

console.log(Object.keys(product));

console.log(Object.values(product));


console.log(Object.entries(product));


const a = { name: "Ali", age: 20 };
const b = { city: "Tashkent", job: "Developer"};

const both = { ... a, ... b };

const clean = { ... a };

console.log(both);

console.log(clean);


function sumall(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log(sumall(12, 88));

const usera = {
  name: "Ali",
  
  contact: {
    phone: "+998 87 568 47 00"
  }
};

console.log(usera.adress?.city?? "Ma'lumot mavjud emas");