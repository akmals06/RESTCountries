const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    name: {
        common: { type: String, required: true },
        official: { type: String, required: true }
    },
    code: { type: String, required: true },
    codes: [String],
    currency: {
        code: { type: String, required: true },
        name: { type: String, required: true },
        symbol: { type: String, required: true }
    }
});