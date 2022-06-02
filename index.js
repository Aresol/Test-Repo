import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()
const port = process.env.port || 8000 // If cannot access set to 8000

//Start the connection with the parameters
.then(async client => {
    app.listen(port, () => {
        console.log('listening on port',port)
    })
})