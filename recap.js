/*
=========================================
STRINGS
=========================================
*/

// .length → Total characters
let str = "Hello";
console.log(str.length);            // 5

// str[index] → Access character
console.log(str[1]);                // e

// .split("") → String → Array
console.log(str.split(""));         // ['H','e','l','l','o']

// .join("") → Array → String
let arr = ["H","e","l","l","o"];
console.log(arr.join(""));          // Hello

// .toUpperCase() → Uppercase
console.log(str.toUpperCase());     // HELLO

// .toLowerCase() → Lowercase
console.log("HELLO".toLowerCase()); // hello

// .trim() → Remove spaces
console.log("   Hi   ".trim());     // Hi

// .slice(start,end) → Part of string
console.log(str.slice(1,4));        // ell

// .slice(-n) → Last n characters
console.log(str.slice(-2));         // lo

// .concat() → Join strings
console.log("Hello ".concat("World")); // Hello World

// + → Join strings
console.log("Hello " + "World");

// Template Literal
let name = "Junayed";
console.log(`Hello ${name}`);

// .includes() → Check substring
console.log(str.includes("el"));    // true

/*
=========================================
ARRAYS
=========================================
*/

// .push() → Add last
arr.push("!");
console.log(arr);

// .reverse() → Reverse array
console.log(arr.reverse());

/*
=========================================
OBJECTS
=========================================
*/

let student = {
    name: "Junayed",
    age: 22
};

// Dot notation
console.log(student.name);

// Bracket notation
console.log(student["age"]);

// Add property
student.grade = "A";

// Update property
student.age = 23;

// Delete property
delete student.grade;

// Object.keys()
console.log(Object.keys(student));

// Object.values()
console.log(Object.values(student));

// Object.entries()
console.log(Object.entries(student));

/*
=========================================
LOOPS
=========================================
*/

// for loop
for(let i=0;i<3;i++){
    console.log(i);
}

// for...in
for(let key in student){
    console.log(key, student[key]);
}

/*
=========================================
FUNCTION
=========================================
*/

function greet(name){
    return "Hello " + name;
}

console.log(greet("Junayed"));

/*
=========================================
TYPE CHECK
=========================================
*/

console.log(typeof "Hello");     // string
console.log(typeof 100);         // number
console.log(typeof true);        // boolean

console.log(Array.isArray(arr)); // true

/*
=========================================
CONDITIONS
=========================================
*/

let age = 18;

if(age >= 18){
    console.log("Adult");
}else{
    console.log("Minor");
}

console.log(!true);              // false

/*
=========================================
OUTPUT
=========================================
*/

console.log("Finished");