// ●  Get an array of all keys  
// ●  Get an array of all  values
// ●  Delete the pages property using delete.

let book = {
    title: "The Hobbit",
    author: "Tolkien",
    pages: 310
}; 

let allKeys = Object.keys(book);
console.log("All Keys on the object: ",allKeys);

let allValues = Object.values(book);
console.log("All Values on the object: ",allValues);

delete book.author;
console.log("Object after deleting autor key: ", book);
