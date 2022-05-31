import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()
const MongoClient = mongodb.MongoClient // access to Mongo client
const port = process.env.port || 8000 // If cannot access set to 8000

MongoClient.connect(
    process.env.WPP1_DB_URI,{
        poolSize: 10,
        wtimeout: 2500,
        useNewUrlParse: true
    }
)

//CATCH ERROR
.catch(err => {
    console.error(err.stack)
    process.exit(1)
}) 

//Start the connection with the parameters
.then(async client => {
    app.listen(port, () => {
        console.log('listening on port ${port}')
    })
})