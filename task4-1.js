const prompt = require("prompt-sync")();


// 1
let word1 = prompt("Enter a word: ");
let rev = "";
for(let i=word1.length-1; i>=0; i--){
    rev+=word1[i];
}
console.log(rev);


// 2
let word2 = prompt("Enter a word: ");
let reverse = word2.split("");
console.log(reverse);
reverse = reverse.reverse();
console.log(reverse);
reverse = reverse.join("");
console.log(reverse);

//3
let word3 = prompt("Enter a word: ");
let revers = "";
for (let ch of word3) {
    revers = ch + revers;
}
console.log(revers);