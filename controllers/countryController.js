const Country = require('../models/Country');

// create
const createCountry = async (req, res) => {
  try {
    const data = req.body;
    let result;

    if (Array.isArray(data)) {
      result = await Country.insertMany(data);
    } else {
      result = await Country.create(data);
    }

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'gagal menambahkan negara' });
  }
};

// read
const getCountryBy = async (req, res) => {
    try {
      const { key, value } = req.params;
      let countries = [];
  
      if (key === 'all') {
        countries = await Country.find();
  
      } else if (key === 'languages') {
        const all = await Country.find();
        countries = all.filter(c => {
          let vals;
          if (c.languages instanceof Map) {
            vals = Array.from(c.languages.values());
          } else {
            vals = Object.values(c.languages || {});
          }
          return vals.includes(value);
        });
        
      } else {
        countries = await Country.find({ [key]: value });
      }
  
      if (!countries.length) {
        return res.status(404).json({ message: 'Negara tidak ditemukan' });
      }
  
      res.json(countries);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data' });
    }
  };


module.exports = {
  createCountry,
  getCountryBy,
};