const student = {
    name: 'Alisher',
    age: 18,
    group: "Front end",
    isStudent: true
};
console.log(student.name);
console.log(student.group);
student.age = 32;
student.city = 'Andijon';
console.log(student);

// 2-vazifa
let product = {
    name: 'MacBook',
    price: '$1.200',
    inStock: true,
    Category: 'Premium'
}
console.log(product.price);
product.price = '$1.089';
product.Discount = '9%';
console.log(product);

// 3-vazifa
let value = 2008
console.log(typeof value);

value = 'Alisher'
console.log(typeof value);

value = true
console.log(typeof value);

// 4-vazifa
let user = {
    name: 'Alisher',
    age: 18,
    isStudent: true
}
if (user.age >= 18 && user.isStudent === true) {
    console.log('Voyaga yetgansiz va talabasiz!');
}else{
    console.log('Voyaga yetmagansiz');
}

// 5-vazifa
let course = {
    title: 'The backend course',
    duration: '7 mounth',
    price: '$59 per mounth',
    isOnline: false,
    students: 'max-15 students and min-7 students'
}
console.log(course);

console.log(course.title);
console.log(course.duration);
course.price = '$53 per mounth';
course.level = 'Junior'
console.log(course);

if (course.isOnline === true) {
    console.log('Online course is available');
}else{
    console.log('Online course is not available');
}


let mounth = 11;
switch (mounth) {
    case 12:
    case 1:
    case 2:
        console.log("Qish");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Bahor");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Yoz");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Kuz");
        break;
    default:
        console.log("Nato'g'ri son kiritdingiz");
        break;
}



function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "/":
            if (b === 0) {
                return "No'lga bo'lib bo'lmaydi";
            }
            return a / b;
        case "*":
            return a * b;
        default:
            return "Mavjud bo'lmagan operation";
    }
}
console.log(calculate(10, 50, "+"));
console.log(calculate(10, 5, "/"));
console.log(calculate(10, 0, "/"));
console.log(calculate(10, 50, "*"));


const hisobla = (number) => {
    return number * number;
}
console.log(hisobla(12));


const great = (a, b) => {
    if (a > b) {
        return a + " " + "Kattaroq";
    }else{
        return b + " " + "Kattaroq";
    }
}
console.log(great(12, 84));

const fullname = (a, b) => {
    return a + " " + b;
}
console.log(fullname("Alisher", "Qobilov"));


function processNumber(number, callback) {
    return callback(number)
}
function double(a) {
    return a * 2;
}
function square(a) {
    return a ** 2 
}

console.log(processNumber(7, double));
console.log(processNumber(6, square));


const cars = ["cadillac", "mercedes", "bmw", "lamborghini"];

const uzbcars = ["matiz", "lacetti", "nexia 2", "ko'k jiguli"];

const all = [...cars, ...uzbcars];
all.unshift("dodge");
all.push("malibu 2")
console.log(all);

