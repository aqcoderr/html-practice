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