const express = require('express');
const router = express.Router();
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
  updateCountrySubregions,
  updateCountryCurrency,

  deleteCountryCurrency,
  deleteCountryByCommonName,
  deleteCountryCode,
  deleteCountryCodes, 
  deleteCountryDemonym,
  deleteCountryLanguages,
  deleteCountryCapital,
  deleteCountryCallingCode,
  deleteCountryRegion,
  deleteCountrySubregions
} = require('../controllers/countryController');

// create (post)
router.post('/countries', createCountry);

// Create
router.post('/countries', addCountry);
router.post('/countries/bulk', addCountriesBulk);

// Get
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

// Update
router.put('/countries/code/:code/name', updateCountryName);
router.put('/countries/code/:code/currency', updateCountryCurrency);
router.put('/countries/code/:code/code', updateCountryCode);
router.put('/countries/code/:code/codes', updateCountryCodes);
router.put('/countries/code/:code/demonym', updateCountryDemonym);
router.put('/countries/code/:code/languages', updateCountryLanguages);
router.put('/countries/code/:code/capital', updateCountryCapital);
router.put('/countries/code/:code/callingCode', updateCountryCallingCode);
router.put('/countries/code/:code/region', updateCountryRegion);
router.put('/countries/code/:code/subregions', updateCountrySubregions);

// Delete
router.delete('/countries/name/:commonName', deleteCountryByCommonName);
router.delete('/countries/code/:code/currency', deleteCountryCurrency);
router.delete('/countries/code/:code/code', deleteCountryCode);
router.delete('/countries/code/:code/codes', deleteCountryCodes);
router.delete('/countries/code/:code/demonym', deleteCountryDemonym);
router.delete('/countries/code/:code/languages', deleteCountryLanguages);
router.delete('/countries/code/:code/capital', deleteCountryCapital);
router.delete('/countries/code/:code/callingCode', deleteCountryCallingCode);
router.delete('/countries/code/:code/region', deleteCountryRegion);
router.delete('/countries/code/:code/subregions', deleteCountrySubregions);


module.exports = router;
