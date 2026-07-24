// ●  Use a for...in loop to log each key and value like: math: 90. 
// ●  Calculate the average of all values in the loop.
let scores = {
    math: 90,
    science: 85,
    art: 95
};
let sum = 0;
let count = 0;
for (let key in scores) {
    console.log(key + ": " + scores[key]);
    sum += scores[key];
    count++;
// Dot notation can't be used here because the property name changes in each loop.
// Bracket notation accesses the property using the current key variable.
}

let average = sum / count;
console.log("Average:", average);