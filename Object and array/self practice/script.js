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
console.log(fruits.at(-1));
console.log(fruits.includes('banan'));

let result = fruits.slice(0, 1);
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
const ages = [54, 23, 12, 11, 32, 6, 28];
let adults = ages.filter(age => age >= 18);
console.log(adults);

// find
const nums = [4, 23, 11, 11, 32, 6, 28];
let numresult = nums.find(num => num <= 18);
console.log(numresult);

// findIndex
let numresultindex = nums.findIndex(num => num >= 8);
console.log(numresultindex);

// some
const numsome = [54, 23, 12, 11, 32, 6, 28];
let someresult = numsome.some(some => some >= 18);
console.log(someresult);

// every
const numevery = [54, 23, 11, 11, 32, 6, 28];
let everyresult = numevery.every(some => some >= 18);
console.log(everyresult);

// reduce
let total = nums.reduce((sum, n) =>{
    return sum + n;
}, 0);
console.log(total);

// sort()
let sortnums = [76, 44, 31, 0.01, 98, 11, 1, 0];

sortnums.sort((a, b) => a - b);
console.log(sortnums);

// toSorted()
let sortednums = [36, 84, 3, 0.01, 18, 91, 4, 0];

let sortednumsresult = sortednums.toSorted((a, b) => a - b);

console.log(sortednumsresult);
console.log(sortednums);

//reverse()
let reverse = [56, 24, 3, 0, 0.01, 18, 91, 4];
reverse.reverse();
console.log(reverse);

// toReversed()
let toreversed = [18, 91, 4, 56, 24, 3, 0, 0.01];
const reversed = toreversed.toReversed();
console.log(toreversed);
console.log(reversed);

// flat
let flat = [12, 43, [10, 54,[11, 91, 1], 34], 86, 19,];
console.log(flat.flat(Infinity));

// flatMap
const flatmap = [1, 2, 3];

const resultflat = flatmap.flatMap(n => [n, n * 4]);

console.log(resultflat);

// join
const fruitsj = ["olma", "banan", "uzum"];

console.log(fruitsj.join());


console.log(fruitsj.join(" - "));

// toString
const numbersts = [10, 20, 30];

console.log(numbersts.toString());

// is array
console.log(Array.isArray([1, 2, 3]));

// Array from
const numbersaf = Array.from("HELLO JAVASCRIPT")
console.log(numbersaf);

// Array of
const numbersao = Array.of(10, 90, 43);
console.log(numbersao);

// Array
console.log(Array(5));

// Fill
let numfill = [1, 2, 3, 4, 5];
const numfillresult = numfill.fill("Salom", 1, 3);
console.log(numfillresult);

// copyWithin
const numberscw = [1, 2, 3, 4, 5];

numberscw.copyWithin(0, 1, 4);
console.log(numberscw);

// with
const numbersw = [10, 20, 30];

const newNumbers = numbersw.with(1, 99);

console.log(newNumbers);
// [10, 99, 30]

console.log(numbersw);