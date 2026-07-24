// ●  Log the city using dot notation chaining. 
// ●  Add a country property inside the address. 
// ●  Delete the zip property from the nested object. 

let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701",
  },
};
// 1
console.log("1.  City: ",user.address.city);

// 2
user.address.country ="USA";
console.log("2.  New property added: ",user);

// 3
console.log("3.  Before: ",user);
delete user.address.zip;
console.log("3.  After Deleting: ",user);