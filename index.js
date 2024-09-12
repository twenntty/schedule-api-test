const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

const app = express()

const start =  async () => {
    try{
        await mongoose.connect('mongodb+srv://Markus:090987@cluster0.m2w6nyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        app.listen(PORT,() => console.log('server started on port ${PORT}'))
    } catch (e) {
        console.log(e)
    }
}

start()