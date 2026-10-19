// Hosting
console.log(findage(1994));



// 1-vazifa
function ismfamilya(name) {
    console.log("Salom men", name);
}
ismfamilya("Alisherman")
ismfamilya("Nodrman")
ismfamilya("Boburman")
ismfamilya("man")

// 2-vazifa
function yigindi(a, b) {
    return a + b;
}
let yigindinatijasi = yigindi(22, 10);
console.log(yigindinatijasi);

// 3-vazifa
function toqyokijuft(raqam) {
    if (raqam % 2 === 0) {
        return "Juft son";
    }else{
        return "Toq son";
    }
}
const toqjuftnatija = toqyokijuft(921)
console.log(toqjuftnatija);

// 4-vazifa
function sontekshir(son) {
    if (son > 0) {
        return 'Musbat son';
    }
    else if (son < 0) {
        return 'Manfiy son';
    }else{
        return 'Qiymat 0 ga teng';
    }
}
const minusorplus = sontekshir(0.01);
console.log(minusorplus);

// 5-vazifa
function bahober(ball) {
    if (ball >= 90) {
        return 'Alo'
    }
    else if (ball >= 70) {
        return 'Yaxshi'
    }
    else if (ball >= 60) {
        return 'Qoniqarli'
    }
    else {
        return 'Qoniqarsiz'
    }
}
const umumiynatija = bahober(75);
console.log(umumiynatija);

// 6-vazifa
function chegirma(narx) {

    if (narx >= 500000) {
        return narx - narx * 10 / 100;
    }else{
        return narx;
    }
}
const chegirmahisobla = chegirma(800000);
console.log(chegirmahisobla);

// 7-vazifa
function findage(birthyear, nowyear = 2026) {
    const yosh = nowyear - birthyear;
    if (yosh >= 18) {
        return 'Siz kirishingiz mumkin. Yoshingiz:' + ' ' + yosh + ' ' + 'yosh';
    }else{
        return 'Siz kirishingiz mumkin emas. Yoshingiz:' + ' ' + yosh + ' ' + 'yosh';
    }
}
const yosh = findage(2008);
console.log(yosh);
ismfamilya("Islomman");