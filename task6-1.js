// ●  Get brand using dot notation. 
// ●  Get model using bracket notation. 
// ●  Add a new property color: "blue" using bracket notation. 
// ●  Update year to 2023 using dot notation.

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};
// console.log("Brand: ",car.brand);
// console.log("Model: ",car['model']);
car['color'] = "Blue";
// console.log("Color: ",car.color);
car.year = 2023;
console.log(car);