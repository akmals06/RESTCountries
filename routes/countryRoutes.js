const express = require('express');
const { 
    addCountry, 
    getAllCountries, 
    getCountryByName, 
    getCountryByCode, 
    getCountriesByRegion, 
    getCountriesByLanguage,
    addCountriesBulk,
    getCountriesBySubregion,
    updateCountry
} = require('../controllers/countryController');

const router = express.Router();

// create
router.post('/countries', addCountry);
router.post('/countries/bulk', addCountriesBulk);

// read
router.get('/countries', getAllCountries);
router.get('/countries/name/:name', getCountryByName);
router.get('/countries/code/:code', getCountryByCode);
router.get('/countries/region/:region', getCountriesByRegion);
router.get('/countries/language/:lang', getCountriesByLanguage);
router.get('/countries/subregion/:sub', getCountriesBySubregion);

// update
router.put('/countries/code/:code', updateCountry);

module.exports = router;
