import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/connectingDB.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`we are on http://localhost:${port}`);
  });
});
