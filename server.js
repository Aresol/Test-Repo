import express from "express"
import mongoose from "mongoose"
import router from "./route.js"

const app = express()
const username = "wpp-mdb-admin";
const password = "UbMZwDLZCKGSum4t";
const cluster = "cluster0.blzddpr.";
const dbname = "";

app.use(express.json()) // Allows express to read json

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

export default app