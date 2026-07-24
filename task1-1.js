let str = "hello"; 
let arr = ["h", "e", "l", "l", "o"];
arr.push("!");
// str.push("!");
// Data Type: Strings are primitive text or immutable sequences, not collection objects.
// No Method: The string prototype does not contain a push function
// Alternative: To add text to a string, use concatenation like 
console.log(str.length, " ", arr.length);
console.log(str[0]," ", arr[arr.length-1]);
