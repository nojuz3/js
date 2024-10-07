"use strict";

let a = 6;

switch (a) {
    case 1:
    case 2:
        console.log("Number is 2");
        break;
    case 3:
    case 4:
        console.log("Number less then 5");
        break;
    case 5:
        console.log("Number is 5");
        break;
    case 6:
        console.log(`The number was ${a} `)
        a = 8
        console.log(`The number now is ${a} `)
        break;
    default:
        console.log("Number is invalid")
}
let fruit = 'apple';
switch(fruit){
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit`);
        break;
    default:
        console.log(`${fruit} is not a fruit`);
        break;
}

// Pratybos switch 1
let num = 7;

switch(num){
    case 1:
        console.log("Sendien yra Pirmadienis");
        break;
    case 2:
        console.log("Sendien yra Antradienis");
        break;
    case 3:
        console.log("Sendien yra Treciadienis");
        break;
    case 4:
        console.log("Sendien yra Ketvirtadienis");
        break;
    case 5:
        console.log("Sendien yra Penktadienis");
        break;
    case 6:
        console.log("Sendien yra Sestadienis");
        break;
    case 7:
        console.log("Sendien yra Sekmadienis");
        break;
    default:
        console.log("neteisingai nurodytas skaicius");
        break;
}
// Pratybos switch 2

let men = 'spalis';

switch(men){
    case 'sausis':
        console.log("Sitas menesis yra 1 pagal kalendoriu");
        break;
    case 'vasaris':
        console.log("Sitas menesis yra 2 pagal kalendoriu");
        break;
    case 'kovas':
        console.log("Sitas menesis yra 3 pagal kalendoriu ");
        break;
    case 'balandis':
        console.log("Sitas menesis yra 4 pagal kalendoriu ");
        break;
    case 'gegužė':
        console.log("Sitas menesis yra 5 pagal kalendoriu ");
        break;
    case 'birželis':
        console.log("Sitas menesis yra 6 pagal kalendoriu");
        break;
    case 'liepa':
        console.log("Sitas menesis yra 7 pagal kalendoriu");
        break;
    case 'rugpjūtis':
        console.log("Sitas menesis yra 8 pagal kalendoriu");
        break;
    case 'rugsėjis':
        console.log("Sitas menesis yra 9 pagal kalendoriu");
        break;
    case 'spalis':
        console.log("Sitas menesis yra 10 pagal kalendoriu");
        break;
    case 'lapkritis':
        console.log("Sitas menesis yra 11 pagal kalendoriu");
        break;
    case 'gruodis':
        console.log("Sitas menesis yra 12 pagal kalendoriu");
        break;
    default:
        console.log("neteisingai yrasytas mensio pavadinimas");
        break;
}

// 18 skaidre pratybos

let score = 20;

if (score > 25 || score >=30 ){
    console.log("You got an A good job");
}else if (score > 20 || score >=25 ) {
    console.log("You got an B good");
}else if (score > 15 || score >=20 ) {
    console.log("You got an C eh");
}else if (score > 10 || score >=15 ) {
    console.log("You got an D need's improvement");
}else if (score > 5 || score >=10 ) {
    console.log("You got an E very bad");
}else if (score > 0 || score >=5 ) {
    console.log("You got an F Terrible");
}

// 18 skaidre pratybos

let word = "rfdhlob";

switch(word[0]){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        word = 'A';
        break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
        word = 'B';
        break;
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
        word = 'C';
        break;
    default:
        word = 'D';
        break;
}
console.log(word)



