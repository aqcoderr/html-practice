// at method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.at(-1));

// concat method
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
let result = arr1.concat(arr2, arr3);
console.log(result);

// constructor
let text = fruits.constructor;
console.log(text);

// copyWithin
fruits.copyWithin(2, 0);
console.log(fruits);

// fill
fruits.fill("Kiwi", 0, 4);
console.log(fruits);
