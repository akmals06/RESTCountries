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

const updateCountryCodes = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { codes: req.body.codes },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil memperbarui codes', codes: updated.codes });
    } catch (err) {
        res.status(500).json({ error: 'gagal memperbarui codes' });
    }
};

const updateCountryDemonym = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { demonym: req.body.demonym },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil memperbarui demonym', demonym: updated.demonym });
    } catch (err) {
        res.status(500).json({ error: 'gagal memperbarui demonym' });
    }
};

const updateCountryLanguages = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { languages: req.body.languages },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil memperbarui languages', languages: updated.languages });
    } catch (err) {
        res.status(500).json({ error: 'gagal memperbarui languages' });
    }
};

const updateCountryCapital = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { capital: req.body.capital },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil memperbarui capital', capital: updated.capital });
    } catch (err) {
        res.status(500).json({ error: 'gagal memperbarui capital' });
    }
};

const updateCountryCallingCode = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { callingCode: req.body.callingCode },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil memperbarui calling code', callingCode: updated.callingCode });
    } catch (err) {
        res.status(500).json({ error: 'gagal memperbarui calling code' });
    }
};

const updateCountryRegion = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { region: req.body.region },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil memperbarui region', region: updated.region });
    } catch (err) {
        res.status(500).json({ error: 'gagal memperbarui region' });
    }
};

const updateCountrySubregions = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { subregions: req.body.subregions },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil memperbarui subregions', subregions: updated.subregions });
    } catch (err) {
        res.status(500).json({ error: 'gagal memperbarui subregions' });
    }
};

const updateCountryCurrency = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { currency: req.body.currency },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil memperbarui currency', currency: updated.currency });
    } catch (err) {
        res.status(500).json({ error: 'gagal memperbarui currency' });
    }
};

//---------------------------------------------------------------------------------
//delete
const deleteCountryCurrency = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { $unset: { currency: "" } },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil menghapus currency' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus currency' });
    }
};

const deleteCountryByCommonName = async (req, res) => {
    try {
        const country = await Country.findOneAndDelete({
            'name.common': req.params.commonName
        });

        if (!country) {
            return res.status(404).json({ message: 'negara tidak ditemukan' });
        }

        res.json({ message: 'negara dan semua atributnya berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus negara dan atributnya' });
    }
};

const deleteCountryCode = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { $unset: { code: "" } },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil menghapus code' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus code' });
    }
};

const deleteCountryCodes = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { $unset: { codes: "" } },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil menghapus codes' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus codes' });
    }
};

const deleteCountryDemonym = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { $unset: { demonym: "" } },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil menghapus demonym' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus demonym' });
    }
};

const deleteCountryLanguages = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { $unset: { languages: "" } },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil menghapus languages' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus languages' });
    }
};

const deleteCountryCapital = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { $unset: { capital: "" } },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil menghapus capital' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus capital' });
    }
};

const deleteCountryCallingCode = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { $unset: { callingCode: "" } },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil menghapus calling code' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus calling code' });
    }
};

const deleteCountryRegion = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { $unset: { region: "" } },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json({ message: 'Berhasil menghapus region' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus region' });
    }
};

const deleteCountrySubregions = async (req, res) => {
    try {
        const updated = await Country.findOneAndUpdate(
            { code: req.params.code },
            { $unset: { subregions: "" } },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'negara tidak ditemukan' });
        res.json({ message: 'berhasil menghapus subregions' });
    } catch (err) {
        res.status(500).json({ error: 'gagal menghapus subregions' });
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
};