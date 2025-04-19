const express = require('express');
const {
  addCountry,
  addCountriesBulk,
  getAllCountries,
  getCountryByName,
  getCountryByCode,
  getCountriesByRegion,
  getCountriesByLanguage,
  getCountriesBySubregion,
  updateCountry,
  patchCountry,
  deleteCountry
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
router.patch('/countries/code/:code', patchCountry);

// delete
router.delete('/countries/code/:code', deleteCountry);

module.exports = router;
