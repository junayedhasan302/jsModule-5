console.log("===== STRING METHODS =====");

let text = "  JavaScript  ";

console.log(text.length);
console.log(text[2]);
console.log(text.trim());
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(2,8));
console.log(text.includes("Script"));

let chars = text.trim().split("");
console.log(chars);

console.log(chars.join("-"));

console.log("Hello ".concat("World"));

let language = "JavaScript";
console.log(`Learning ${language}`);

console.log("\n===== ARRAY METHODS =====");

let fruits = ["Apple","Banana"];

console.log(fruits);

fruits.push("Orange");
console.log(fruits);

fruits.reverse();
console.log(fruits);

console.log("\n===== OBJECT METHODS =====");

let student = {
    name:"Junayed",
    age:22
};

console.log(student);

console.log(student.name);
console.log(student["age"]);

student.city = "Dhaka";
console.log(student);

student.age = 23;
console.log(student);

delete student.city;
console.log(student);

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

console.log("\n===== LOOPS =====");

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for(let key in student){
    console.log(key + ":", student[key]);
}

console.log("\n===== FUNCTION =====");

function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));

console.log("\n===== TYPE CHECK =====");

console.log(typeof 100);
console.log(typeof "Hello");
console.log(typeof false);

console.log(Array.isArray(fruits));

console.log("\n===== CONDITION =====");

let marks = 85;

if(marks >= 80){
    console.log("Excellent");
}else{
    console.log("Keep Practicing");
}

console.log(!false);

console.log("\n===== END =====");