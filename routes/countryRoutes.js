const express = require('express');
const router = express.Router();
const {
  createCountry,
  getCountryBy,
  updateCountryBy,
  deleteCountry,
} = require('../controllers/countryController');

// create (post)
router.post('/countries', createCountry);

// read (get)
router.get('/countries/all', getCountryBy);
router.get('/countries/:key/:value', getCountryBy);

// update (put)
router.put('/countries/:key/:value', updateCountryBy);

// delete
router.delete('/countries/:key/:value',deleteCountry);


module.exports = router;
