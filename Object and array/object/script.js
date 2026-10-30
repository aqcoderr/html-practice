// 1-vazifa
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


// 2-vazifa
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

// 3-vazifa
const a = { name: "Ali", age: 20 };
const b = { city: "Tashkent", job: "Developer"};

const both = { ... a, ... b };

const clean = { ... a };

console.log(both);

console.log(clean);


// 4-vazifa
const user2 = {
id: 1,
name2: "Dilshod",
email2: "dilshod@example.com",
role: "admin",
status: "active"
};
const {name2, email2, ...rest} = user2;
console.log(name2);
console.log(email2);

const { } = user2;
console.log(rest);


// 5-vazifa
const products =[
{ id: 1, name: "Laptop", price: 1200, brand: "HP" },
{ id: 2, name: "Phone", price: 800, brand: "Samsung" },
{ id: 3, name: "Mouse", price: 50, brand: "Logitech" },
{ id: 4, name: "Keyboard", price: 70, brand: "Rapoo"}
];

products.forEach(product =>{
    console.log(product.name, product.price, product.brand);
})
let result = products.filter(product => product.price > 100);
console.log(result);

const newproduct = products.map(product => {
    return{
        ...product,
        price: product.price * 1.1
    };
});
console.log(newproduct);

const totalprice = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);
console.log(totalprice);



const users = [
    { id: 1, name3: "Ali", age2: 20, job: "Developer", salary: 500 },
    { id: 2, name3: "Vali", age2: 17, job: "Student", salary: 0 },
    { id: 3, name3: "Malika", age2: 22, job: "Designer", salary: 700 },
    { id: 4, name3: "Sami", age2: 25, job: "Developer", salary: 900 }
];
console.log("Object keys", Object.keys(users));

console.log("Object values", Object.values(users));

console.log("Object entries", Object.entries(users));

const newsalary = users.map(product => {
    return {
        ...product,
        salary: product.salary * 1.2
    };
}); 
console.log("Yangilangan maosh", newsalary);

users.forEach(user => {
    const { name3, age2, job } = user;
    console.log("Destructuring bilan ishlatilgan", name3, age2, job);
});
