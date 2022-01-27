require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const router = require("./routes/index")
var bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

const PORT = process.env.PORT || 5000

app.use('/api', router)

const start = async () => {
    
    try {

        mongoose.connect(process.env.DB_CONNECTION_STRING, () => {
            console.log("connected!")
        })
                
        app.listen(PORT, () => console.log("server started"))
    } catch(ex) {

        console.log("server start error!", ex)
    }
}

start()
