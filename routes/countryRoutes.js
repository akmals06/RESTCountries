const express = require('express');
const {
  addCountry,
  addCountriesBulk,

  getCountries,
  getCountryName,
  getCountryCurrency,
  getCountryCode,
  getCountryCodes,
  getCountryDemonym,
  getCountryLanguages,
  getCountryCapital,
  getCountryCallingCode,
  getCountryRegion,
  getCountrySubregions,
  
  updateCountryName,
  updateCountryCode,  
} = require('../controllers/countryController');

const router = express.Router();

// create
router.post('/countries', addCountry);
router.post('/countries/bulk', addCountriesBulk);

// get
router.get('/countries', getCountries);
router.get('/countries/code/:code/name', getCountryName);
router.get('/countries/code/:code/currency', getCountryCurrency);
router.get('/countries/code/:code/code', getCountryCode);
router.get('/countries/code/:code/codes', getCountryCodes);
router.get('/countries/code/:code/demonym', getCountryDemonym);
router.get('/countries/code/:code/languages', getCountryLanguages);

module.exports = router;