const prompt=require("prompt-sync")();
let n1=prompt("entrer le premier number:");
let n2=prompt("entrer la deuxieme number:");
let n3=prompt("entrer le troisieme number:");
let moyenne=(n1*2+n2*3+n3*5)/10;
console.log(` la moyenne pondere de trois nombres:${moyenne}`);
