// let age = 14;

// if (age >= 18) {
//   console.log("You can drive!");
// }else{
//     console.log("You can Not drive!");
// }

// // next

// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }


// Function Declaration

// function even0r0ddDec(number) {
//   if (number % 2 === 0) {
//     console.log('${number} is even');
//   } else { 
//     console.log('${number} is odd');
//   } 
// }
// even0r0ddDec(2);

// Function Exspression

// const evenOrOddExp = function(number){
//   if (number % 2 === 0) {
//     console.log('{number} is even');
//   }else{
//     console.log('{number} is odd');
//   }
// }
// evenOrOddExp(2);

// Function Arrow

// const evenOrOddArrow = number =>{
//   if (number % 2 === 0) {
//     console.log('{number} is even');
//   }else{
//     console.log('{number} is odd');
    
//   }
// }
// evenOrOddArrow(6);

// function betterdec (num1, num2) {
//   if (num1 >= num2) {
//     return num1;
//   }
//   return num2;
// }
// console.log(betterdec(23, 45));

const greaterexp = function(num1, num2){
  if (num1 >= num2) {
    return num1;
  }
  return num2;
}
console.log(greaterexp(23, 76));

const maxarrow (num3, num4) => {
  if (num3 >= num4) {
    return num3;
  }
  return num4;
}
console.log(maxarrow(234,564));
