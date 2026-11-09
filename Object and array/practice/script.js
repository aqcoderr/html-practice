//1-vazifa
const user = {
    name: "Ali",
    age: 18
};
const {name, age, city} = user;
console.log(name);
console.log(age);
console.log(city ?? "Andijon");

// 2-vazifa
const colors = ["Red", "Green", "Blue", "Yellow"];

const [first, , third] = colors;
console.log(first);
console.log(third);

// 3-vazifa
const updatedUser = {
    ...user,
    age: 20,
    job: "Backend developer"
};
console.log(updatedUser);


// 4-vazifa
const user2 = {
    name2: "Ali",
    age: 18,
    email: "ali@gmail.com",
    job: "Developer",
    city: "Andijan"
};

const {name2, ...rest} = user2;
console.log(name2);
console.log(rest);

// 5-vazifa
const user3 = {
    name3: "Ali",
    age3: 18
};

const extra = {
    city3: "Andijan",
    job3: "Developer"
};

const newUser = Object.assign({}, user3, extra);
console.log(newUser);


// 6-vazifa
const user0 = {
    name0: "Ali",
    age0: 18,
    email0: "ali@gmail.com"
};

console.log(Object.hasOwn(user0, "email0"));
Object.seal(user0);
user0.age0 = 20;
user0.city = "Tashkent";
delete user0.name0;

console.log(user0);
console.log(Object.isSealed(user0));

// 7-vazifa
const product = {
    name: "Laptop",
    price: 1200,
    brand: "Lenovo"
};

const discount = {
    price: 1000,
    discount: true
};

const newProduct = {
    ...product,
}
const finalProduct = Object.assign({}, product, discount);
console.log(newProduct);
console.log(finalProduct);
console.log(product);