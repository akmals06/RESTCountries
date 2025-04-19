const Country = require('../models/Country');

// tambah satu negara
const addCountry = async (req, res) => {
    try {
        const newCountry = new Country(req.body);
        await newCountry.save();
        res.status(201).json({ message: 'berhasil menambahkan negara', country: newCountry });
    } catch (err) {
        res.status(500).json({ error: err.message || 'terjadi kesalahan saat menambahkan negara' });
    }
};

// tambah banyak negara sekaligus
const addCountriesBulk = async (req, res) => {
    try {
        const countries = req.body;
        if (!Array.isArray(countries)) {
            return res.status(400).json({ error: 'data harus berupa array negara' });
        }
        const result = await Country.insertMany(countries);
        res.status(201).json({ message: 'berhasil menambahkan semua negara', countries: result });
    } catch (err) {
        res.status(500).json({ error: err.message || 'terjadi kesalahan saat menambahkan data' });
    }
};

// ambil semua negara
const getAllCountries = async (req, res) => {
    try {
        const countries = await Country.find();
        res.json(countries);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil data negara' });
    }
};

// ambil berdasarkan nama
const getCountryByName = async (req, res) => {
    try {
        const country = await Country.findOne({ 'name.common': req.params.name });
        if (!country) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json(country);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mencari negara' });
    }
};

// ambil berdasarkan kode
const getCountryByCode = async (req, res) => {
    try {
        const code = req.params.code.toUpperCase();
        const country = await Country.findOne({ code });
        if (!country) return res.status(404).json({ message: 'kode negara tidak ditemukan' });
        res.json(country);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mencari berdasarkan kode' });
    }
};

// ambil berdasarkan region
const getCountriesByRegion = async (req, res) => {
    try {
        const countries = await Country.find({ region: req.params.region });
        if (countries.length === 0) return res.status(404).json({ message: 'tidak ada negara di region ini' });
        res.json(countries);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil data region' });
    }
};

// ambil berdasarkan subregion
const getCountriesBySubregion = async (req, res) => {
    try {
        const countries = await Country.find({ subregions: req.params.sub });
        if (countries.length === 0) return res.status(404).json({ message: 'tidak ada negara di subregion ini' });
        res.json(countries);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mengambil data subregion' });
    }
};

// ambil berdasarkan bahasa
const getCountriesByLanguage = async (req, res) => {
    try {
        const lang = req.params.lang;
        const countries = await Country.find({ [`languages.${lang}`]: { $exists: true } });
        if (countries.length === 0) return res.status(404).json({ message: 'tidak ada negara yang menggunakan bahasa ini' });
        res.json(countries);
    } catch (err) {
        res.status(500).json({ error: 'terjadi kesalahan saat mencari berdasarkan bahasa' });
    }
};

// update seluruh data negara
const updateCountry = async (req, res) => {
    try {
        const updated = await Country.findOneAndReplace({ code: req.params.code }, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan untuk diperbarui' });
        res.json({ message: 'berhasil memperbarui data negara', country: updated });
    } catch (err) {
        res.status(400).json({ error: 'gagal memperbarui data negara' });
    }
};

// patch sebagian data negara
const patchCountry = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan untuk patch' });
        res.json({ message: 'berhasil mengubah sebagian data', country: updated });
    } catch (err) {
        res.status(400).json({ error: 'gagal patch data negara' });
    }
};

// hapus negara
const deleteCountry = async (req, res) => {
    try {
        const deleted = await Country.findOneAndDelete({ code: req.params.code });
        if (!deleted) return res.status(404).json({ message: 'negara tidak ditemukan untuk dihapus' });
        res.json({ message: 'berhasil menghapus data negara' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus negara' });
    }
};

module.exports = {
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
};
