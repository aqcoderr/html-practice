// Object
let test = {
    name: 'Alisher',
    information: {
        year: 2008,
        mounth: 11,
        day: 16
    },
    arr: ['number', 'perents number']
};
console.log(test);

//length property
const fruits = ["olma", "banan", "uzum", "behi"];

console.log(fruits.length);
console.log(fruits.at(-2));
console.log(fruits.includes('banan'));

let result = fruits.slice(0, 2);
console.log(result);
console.log(fruits);

//Splice
const otherfruits = ['anor', 'sliva', 'olma']
let lastresult = otherfruits.splice(0, 1, 'ananas', 'ME');
console.log(otherfruits);



// forEach
const meva = ["olma", "banan", "uzum", "behi", "Mandarin"];

meva.forEach(function(meva){
    console.log(meva);    
})

// Map
const numbers = [2, 4, 6, 10];
const results = numbers.map(numbers => {
    return numbers * 4;
})
console.log(results);

// Filter
