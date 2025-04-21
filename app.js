const express = require('express');
const countryRoutes = require('./routes/countryRoutes');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api', countryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
