// 1-vazifa
let mevalar = ["olma", "banan", "uzum"];
console.log(mevalar.length);
console.log(mevalar[1]);
mevalar.push("anor");
console.log(mevalar);
console.log(mevalar.length);

// 2-vazifa

let mehmonlar = ["Ali", "Vali", "Madina"];

mehmonlar.unshift("Sardor");
console.log(mehmonlar);

mehmonlar.shift();
console.log(mehmonlar);

console.log(mehmonlar.includes("Madina"));

// 3-vazifa
let oquvchilar = ["Aziza", "Jasur", "Kamola", "Bekzod"];

console.log("Jasurning indexsi", oquvchilar.indexOf("Jasur"));

console.log("3-indexdagi element", oquvchilar[3]);

oquvchilar.unshift("Dilshod");
console.log(oquvchilar);

oquvchilar.shift();
console.log(oquvchilar);

console.log(oquvchilar.includes("Kamola"));
console.log(oquvchilar);

// 4-vazifa
let savat = ["non", "sut", "tuxum"];

savat.push("olma");
console.log(savat);

savat.push("sharbat");
console.log(savat);

savat.unshift("guruch");
console.log(savat);

savat.shift();
console.log(savat);

savat.pop();
console.log(savat);

console.log(savat.indexOf("sut"));


const result = savat.concat(oquvchilar);
console.log(result);


const findvalue = (value) => value === "olma";
const foundvalue = result.find(findvalue);
console.log(findvalue);