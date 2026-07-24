// let name = "JavaScript"; 
const prompt = require("prompt-sync")();
let name = prompt("Enter a string: ");

let upper = "";
let lower = "";
for (let i = 0; i < name.length; i++) {
    // Uppercase
    if (name[i] >= 'a' && name[i] <= 'z') {
        upper += String.fromCharCode(name.charCodeAt(i) - 32);
    } else {
        upper += name[i];
    }
    // Lowercase
    if (name[i] >= 'A' && name[i] <= 'Z') {
        lower += String.fromCharCode(name.charCodeAt(i) + 32);
    } else {
        lower += name[i];
    }
}
console.log("Original :", name);
console.log("Uppercase:", upper);
console.log("Lowercase:", lower);

// let uppercase = name.toUpperCase(name);
// let lowercase = name.toLowerCase(name);
// console.log("uppercase: ", uppercase);
// console.log("Lowercase: ", lowercase);