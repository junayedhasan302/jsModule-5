// Build a small "contact" system:
// 1.  Convert the email to lowercase and update the object. 
// 2.  Loop through the contact object and print each key-value pair. 
// 3.  Add a new property favoriteWords: [] (an array) — push 3 words to it. 
// 4.  Reverse the name string just for fun using one of your three reverse functions from 
// Task 4.1. 
// 5.  Check if the email includes "@email.com" (case-insensitive) and log a confirmation message. 

let contact = { 
  name: "Alex Johnson", 
  email: "ALEX@EMAIL.COM", 
  phone: "555-1234" 
};

// 1
console.log("1________________________________________________________________");
console.log("Before: ", contact.email);
contact.email = contact.email.toLowerCase();
console.log("After: ",contact.email);


// 2
console.log("2________________________________________________________________");
for(let k in contact){
    console.log(k, ":", contact[k]);
}


// 3
console.log("3________________________________________________________________");
contact.favoriteWords = [];
contact.favoriteWords.push("JavaScript");
contact.favoriteWords.push("C++");
contact.favoriteWords.push("Coding");
console.log(contact);


// 4
console.log("4________________________________________________________________");
console.log("Unchanged name: ", contact.name);
let namee = contact.name.split("").reverse().join("");
console.log("Reversed name: ", namee);


// 5
console.log("5________________________________________________________________");
if(contact.email.includes("@email.com")){
    console.log("Yes, Valid email address!");
} else console.log("Not a valid email address! ");