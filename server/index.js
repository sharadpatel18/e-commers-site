const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app  = express();
const authRoutes = require('./Routes/AuthRoute');
const itemRoute = require('./Routes/AuthRoute');
require('dotenv').config();

mongoose.connect("mongodb://127.0.0.1:27017/e-commers")
.then(()=>{
    console.log("Database is Connected");
})
.catch((error)=>{
    console.log(error);
})


app.use(cors());
app.use(bodyParser.json());
app.use('/auth' , authRoutes);
app.use('/item' , itemRoute);

app.listen(process.env.PORT , ()=>{
    console.log("server is started");
})