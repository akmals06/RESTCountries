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



module.exports = {
  createCountry
};