const express = require('express');
const { 
    addCountry, 
    getAllCountries, 
    getCountryByName, 
    getCountryByCode, 
    getCountriesByRegion, 
    getCountriesByLanguage 
} = require('../controllers/countryController');

const router = express.Router();
