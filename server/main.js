require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser") // for http Only
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

const PORT = process.env.PORT || 5000

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
