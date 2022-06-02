import express from "express"
import mongoose from "mongoose"
import router from "./route.js"

const app = express()

app.use(express.json()) // Allows express to read json

app.use("/api/v1/wpp1", wpp1) // URL for users to go to the app
app.use("*", (req, res) => res.status(404).json({ error: "not found"})) // If used an incorrect URL return error

mongoose.connect(process.env.WPP1_DB_URI,
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

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

export default app