const prompt = require("prompt-sync")();

let word1 = prompt("Enter a string: ");
let word2 = prompt("Enter another string: ");
let concatWord = word1.concat(" ",word2);
console.log(concatWord);

// let finalWord = word1 +" "+ word2;
// console.log(finalWord);