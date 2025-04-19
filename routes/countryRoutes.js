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
  updateCountryCodes,
  updateCountryDemonym,
  updateCountryLanguages,
  updateCountryCapital,
  updateCountryCallingCode,
  updateCountryRegion, 
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
router.get('/countries/code/:code/capital', getCountryCapital);
router.get('/countries/code/:code/callingCode', getCountryCallingCode);
router.get('/countries/code/:code/region', getCountryRegion);
router.get('/countries/code/:code/subregions', getCountrySubregions);

// update
router.put('/countries/code/:code/name', updateCountryName);
router.put('/countries/code/:code/code', updateCountryCode);
router.put('/countries/code/:code/codes', updateCountryCodes);
router.put('/countries/code/:code/demonym', updateCountryDemonym);
router.put('/countries/code/:code/languages', updateCountryLanguages);
router.put('/countries/code/:code/capital', updateCountryCapital);
router.put('/countries/code/:code/callingCode', updateCountryCallingCode);
router.put('/countries/code/:code/region', updateCountryRegion);

module.exports = router;