import express from "express"
import cors from "cors"
import wpp1 from "./api/app1.route.js"

const app = express()

app.use(cors())
app.use(express.json()) // Allows express to read json

app.use("/api/v1/wpp1", wpp1) // URL for users to go to the app
app.use("*", (req, res) => res.status(404).json({ error: "not found"})) // If used an incorrect URL return error

export default app