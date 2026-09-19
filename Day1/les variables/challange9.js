const prompt=require("prompt-sync")();
const x1=prompt("entrer x1:");
const x2=prompt("entrer x2:");
const y1=prompt("entrer y1:");
const y2=prompt("entrer x2:");
const z1=prompt("entrer z1:");
const z2=prompt("entrer z2:");
let results=Math.sqrt((x2+x1)*(x2+x1)+(y2+y1)*(y2+y1)+(z2+z1)*(z2+z1));
console.log(results);