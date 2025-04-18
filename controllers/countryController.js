const Country = require('../models/Country');

const addCountry = async (req, res) => { //Menambahkan country baru
    try {
        const newCountry = new Country(req.body);
        await newCountry.save();
        res.status(201).json({ message: 'Country added successfully!', country: newCountry });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllCountries = async (req, res) => { //Mengambil info semua country
    try {
        const countries = await Country.find();
        res.json(countries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCountryByName = async (req, res) => { //Mengambil info country dari nama country
    try {
        const country = await Country.findOne({ 'name.common': req.params.name });
        if (!country) return res.status(404).json({ message: 'Country not found' });
        res.json(country);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCountryByCode = async (req, res) => { //Mengambil info country dari code country
    try {
        const country = await Country.findOne({ code: req.params.code.toUpperCase() });
        if (!country) return res.status(404).json({ message: 'Country not found' });
        res.json(country);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCountriesByRegion = async (req, res) => { //Mengambil info country dari bagian/region 
    try {
        const countries = await Country.find({ region: req.params.region });
        if (countries.length === 0) return res.status(404).json({ message: 'No countries found in this region' });
        res.json(countries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCountriesByLanguage = async (req, res) => { //Mengambil info country dari bahasa/language aja
    try {
        const countries = await Country.find({ [`languages.${req.params.lang}`]: { $exists: true } });
        if (countries.length === 0) return res.status(404).json({ message: 'No countries found for this language' });
        res.json(countries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 
//Exporting constructor/methods:
module.exports = { addCountry, getAllCountries, getCountryByName, getCountryByCode, getCountriesByRegion, getCountriesByLanguage }; 