const Country = require('../models/Country');

//---------------------------------------------------------------------------------
//add
const addCountry = async (req, res) => {
    try {
        const newCountry = new Country(req.body);
        await newCountry.save();
        res.status(201).json({ message: 'berhasil menambahkan negara', country: newCountry });
    } catch (err) {
        res.status(500).json({ error: err.message || 'terjadi kesalahan saat menambahkan negara' });
    }
};

const addCountriesBulk = async (req, res) => {
    try {
        if (!Array.isArray(req.body)) {
            return res.status(400).json({ error: 'data harus berupa array negara' });
        }
        const result = await Country.insertMany(req.body);
        res.status(201).json({ message: 'berhasil menambahkan semua negara', countries: result });
    } catch (err) {
        res.status(500).json({ error: err.message || 'terjadi kesalahan saat menambahkan data' });
    }
};

//---------------------------------------------------------------------------------
//get
const getCountries = async (req, res) => {
    try {
        const countries = await Country.find();  // Mengambil semua data negara
        res.json(countries);
    } catch (err) {
        res.status(500).json({ error: err.message || 'Terjadi kesalahan saat mengambil data negara' });
    }
};

const getCountryName = async (req, res) => {
    try {
        const country = await Country.findOne({ code: req.params.code });
        if (!country) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json(country.name);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil name' });
    }
};

const getCountryCurrency = async (req, res) => {
    try {
        const country = await Country.findOne({ code: req.params.code });
        if (!country) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json(country.currency);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil currency' });
    }
};

const getCountryCode = async (req, res) => {
    try {
        const country = await Country.findOne({ code: req.params.code });
        if (!country) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ code: country.code });
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil code' });
    }
};

const getCountryCodes = async (req, res) => {
    try {
        const country = await Country.findOne({ code: req.params.code });
        if (!country) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ codes: country.codes });
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil codes' });
    }
};

const getCountryDemonym = async (req, res) => {
    try {
        const country = await Country.findOne({ code: req.params.code });
        if (!country) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ demonym: country.demonym });
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil demonym' });
    }
};

const getCountryLanguages = async (req, res) => {
    try {
        const country = await Country.findOne({ code: req.params.code });
        if (!country) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json(country.languages);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil languages' });
    }
};

const getCountryCapital = async (req, res) => {
    try {
        const country = await Country.findOne({ code: req.params.code });
        if (!country) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json(country.capital);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil capital' });
    }
};

const getCountryCallingCode = async (req, res) => {
    try {
        const country = await Country.findOne({ code: req.params.code });
        if (!country) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json(country.callingCode);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil calling code' });
    }
};

const getCountryRegion = async (req, res) => {
    try {
        const country = await Country.findOne({ code: req.params.code });
        if (!country) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json(country.region);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil region' });
    }
};

const getCountrySubregions = async (req, res) => {
    try {
        const country = await Country.findOne({ code: req.params.code });
        if (!country) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json(country.subregions);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil subregions' });
    }
};

//---------------------------------------------------------------------------------
//update
const updateCountryName = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { name: req.body.name },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil memperbarui name', name: updated.name });
    } catch (err) {
        res.status(500).json({ error: 'gagal memperbarui name' });
    }
};

const updateCountryCode = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { code: req.body.code },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil memperbarui code', code: updated.code });
    } catch (err) {
        res.status(500).json({ error: 'gagal memperbarui code' });
    }
};


module.exports = {
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
};