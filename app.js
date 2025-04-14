const express = require('express');
const mongoose = require('mongoose');
const countryRoutes = require('./routes/countryRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology:true
})
//teststtststs