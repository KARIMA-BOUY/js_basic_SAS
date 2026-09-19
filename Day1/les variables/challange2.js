const prompt=require("prompt-sync")();
let temperture=prompt(" la température en Celsius");
let k=temperture+273.15;
console.log(`la temerture en Kelvin c est ${k}`);