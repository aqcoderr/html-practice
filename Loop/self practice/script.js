for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}
// sum
let a = 1;
let sum = 0;
while (a <= 100) {
    sum += a;
    a++;
}
console.log(sum);


for (let q = 1; q <= 100; q++){
    if (q % 3 == 0 && q % 5 === 0) {
        console.log("Ikkalasi ham to'g'ri");
    }
    else if (q % 3 === 0) {
        console.log("3ga bo'linadi");
    }
    else if (q % 5 === 0) {
        console.log("5ga bo'linadi");
    }else{
        console.log(q);
        
    }
}


let i = 20;
let sum2 = 0;

while (i >= 1 && i <= 20) {
    sum2 += a;
    console.log(i);
    i--;
}
console.log(sum2);
