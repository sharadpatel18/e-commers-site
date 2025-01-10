const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app  = express();
const authRoutes = require('./Routes/AuthRoute');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use('/auth' , authRoutes);

app.listen(process.env.PORT , ()=>{
    console.log("server is started");
})