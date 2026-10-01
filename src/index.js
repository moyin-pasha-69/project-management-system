import dotenv from "dotenv";
import express from "express";
dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Bro!");
});

app.get("/mt", (req, res) => {
  res.send("Hello Bhai!");
});

app.listen(port, () => {
  console.log(`we are on http://localhost:${port}`);
});
