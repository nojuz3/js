// "use strict";

// import {vardas,age,last} from "./script.js";

// console.log(vardas, age, last);


// function hello(fname){

//     console.log("hola "+fname);
// }
// hello("juan");
// hello("Hablo");

// //3

// let name = "Petras";
// let age = 15;

// function prabegoMetai(){
//     age++;
//     console.log(name, age);
// }
// prabegoMetai(name,age);
// prabegoMetai(name,age);

// //4

// function minskc(a,b,c){
//     let x = Math.min(a,b,c);
//     console.log(x);
//     return x;
// }
// let x = minskc(8,9,12);

// //5

// function avarage(a,b,c){
//     let avg = (a + b + c) / 3;
//     console.log(avg);
// }
// avarage(8,9,x);

// //6

// let num = up(4);
// function up(num){
//     num++;
//     return num;
// }
// console.log(num);


const greeting = () => {
    console.log("Holkaldfgldgld")
}
greeting();
//1
const avarage = (a,b,c) => {
    let avg = (a + b + c) / 3;
    console.log(avg);
    return avg;
}
let avg = avarage(3,9,6);
//2

const stip = (a) =>{
    if (a > 6){
        console.log("Negaunama stipendija")
    }else{
        console.log("Gaunama stipendija")
    }
}
stip(avg)
//3

const name = (a) =>{
    let names = a;
    return names;
}
let names = name("Sigmondas");

console.log(names);


//4
let login = 0;
const greet = (a) =>{
    login++
    console.log("Hello " + a + " login in " + login);
}
greet(names,login);
greet(names,login);
greet(names,login);

//5
let vard = "Sigmonas";
let atlyg = 700;

const metinis = (a,b) => {
    let metinis = a * 12;
    console.log(b + " Uzdirba " + metinis + " Euru :) per metus");
}
metinis(atlyg,vard);

//6
let km = 654;
let deg = 1.2;

const kelias =(a,b) =>{
    let kaina = a*b;
    console.log("Kelione jums kainavo "+kaina + " Eur");
}
kelias(km,deg);


//7

let metai = "2023";

const lyginis = (a) =>{
    if (a % 2 == 0){
        console.log("Lyginiai metai");
    }else{
        console.log("Nelyginiai metai");
    }
}
lyginis(metai);


const inpt = prompt("U smell :)");
console.log(inpt);
alert("Yes u do");