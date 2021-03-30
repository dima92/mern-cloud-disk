const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const app = express()
const PORT = config.get('serverPort')

app.use(express.json())
app.use(express.static('static'))

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`Server started on PORT`, PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
