const { config } = require('dotenv');
const mongoose = require('mongoose');

//Skema Body Country.js
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
    },
    demonym: { type: String, required: true },
    languages: { type: Map, of: String },
    capital: { type: String, required: true },
    callingCode: [String],
    region: { type: String, required: true },
    subregions: [String],
    translations: { type: Map, of: String }
});

module.exports = mongoose.model('Country', CountrySchema);