import { City } from "./city.js";
import { isSerializable } from "./classDecorator.js";
import { Product } from "./product.js";

let city = new City("London", 8_982_000);
let product = new Product("Kayak", 275);

console.log(city.getSummary());
console.log(product.getDetails());
console.log(product.getPrice());

console.log(`Get Product tax ${product.tax}`);
product.tax = 30;
console.log(`Get Product tax ${product.tax}`);

if (isSerializable(product)) product.serialize();
