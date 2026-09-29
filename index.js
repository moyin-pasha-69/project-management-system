import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

let greet = process.env.good;
let name = process.env.pass;
console.log(greet, name);

console.log("Hello Bhai!");
