const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json)
app.use("/auth", authRouter)

const start =  async () => {
    try{
        await mongoose.connect(`mongodb+srv://Markus:090987@cluster0.m2w6nyw.mongodb.net/schedule-api-markus?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()