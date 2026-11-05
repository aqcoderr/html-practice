// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function bye() {
//     console.log("Bye!");
// }

// greet("Alisher", bye);


function hisobla(number, callback) {
    callback(number)
}

function dubled(num) {
    console.log(num + 2);
    
}

function square(num) {
    console.log(num ** 2);
}
hisobla(4, dubled);
hisobla(4, square)

function calculate(a, b, callback) {
    callback(a, b);
}

function kopaytma(a, b) {
    console.log(a * b);

}
function qoshish(a, b) {
    console.log(a + b);
}

function ayrish(a, b) {
    console.log(a - b);
}
calculate(50, 2, kopaytma);
calculate(50, 2, qoshish);
calculate(50, 2, ayrish)