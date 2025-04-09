const express = require('express');
const mongoose = require('mongoose');
const countryRoutes = require('./routes/countryRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());


mongoose.connect
