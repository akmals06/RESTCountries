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

router.post('/countries', addCountry); // Manually add a country
router.get('/countries', getAllCountries); // Get all countries
router.get('/countries/name/:name', getCountryByName); // Get by name
router.get('/countries/code/:code', getCountryByCode); // Get by country code
router.get('/countries/region/:region', getCountriesByRegion); // Get by region
router.get('/countries/language/:lang', getCountriesByLanguage); // Get by language

module.exports = router;
