require("dotenv").config();

const mongoose = require('mongoose')
const express = require('express');
const AsmRoutes = require('./routes/AsmRouter');

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

/* app.get('/', (req, res) => {
    res.json({"msg": "Welcome to the app"});
});  */

// routes
app.use('/api/database', AsmRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        // listen to port
        app.listen(process.env.PORT, () => {
            console.log('listening for requests on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    }); 