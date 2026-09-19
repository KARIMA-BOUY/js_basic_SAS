const prompt=require("prompt-sync")();
const n1=prompt("entrer le premier number:");
const n2=prompt("enter le deuxieme number:");
const n3=prompt("entrer la troisieme number:");
let moyenne=Math.pow(n1*n2*n3,1/3);
console.log(`le moyenne geometrique c est :${moyenne}`);