const Country = require('../models/Country');

const addCountry = async (req, res) => {
    try {
        const newCountry = new Country(req.body);
        await newCountry.save();
        res.status(201).json({ message: 'Country added successfully!', country: newCountry });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllCountries = async (req, res) => {
    try {
        const countries = await Country.find();
        res.json(countries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getCountryByName = async (req, res) => {
    try {
        const country = await Country.findOne({ 'name.common': req.params.name });
        if (!country) return res.status(404).json({ message: 'Country not found' });
        res.json(country);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};