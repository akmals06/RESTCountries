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

  // update
const updateCountryBy = async (req, res) => {
  try {
    const { key, value } = req.params;
    const updated = await Country.findOneAndUpdate({ [key]: value }, req.body, { new: true });

    if (updated) {
      res.json({ message: 'berhasil memperbarui data negara', data: updated });
    } else {
      res.status(404).json({ message: 'negara tidak ditemukan' });
    }
  } catch (err) {
    res.status(500).json({ error: 'gagal memperbarui data' });
  }
};

// delete
const deleteCountry = async (req, res) => {
    try {
      const { key, value } = req.params;
      const mode = req.query.mode || 'null';
  
      if (mode === 'delete') {
        const deleted = await Country.findOneAndDelete({ [key]: value });
  
        if (deleted) {
          res.json({ message: 'negara berhasil dihapus', data: deleted });
        } else {
          res.status(404).json({ message: 'negara tidak ditemukan' });
        }
  
      } else if (mode === 'null') {
        const updated = await Country.findOneAndUpdate(
          { [key]: value },
          { $set: { [key]: null } },
          { new: true }
        );
  
        if (updated) {
          res.json({ message: `field '${key}' di-set ke null`, data: updated });
        } else {
          res.status(404).json({ message: 'negara tidak ditemukan' });
        }
  
      } else {
        res.status(400).json({ error: 'mode tidak valid. Gunakan "null" atau "delete"' });
      }
    } catch (err) {
      res.status(500).json({ error: 'terjadi kesalahan saat menghapus atau mengubah field' });
    }
  };

// Export module yang akan akan dipake supaya dapat diakses
module.exports = {
  createCountry,    //CREATE
  getCountryBy,     //READ
  updateCountryBy,  //UPDATE
  deleteCountry,    //DELETE
};