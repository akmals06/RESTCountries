const Country = require('../models/Country');

/* Catatan Penting:

    Kami menggunakan method/constructor yang dapat mengambil response user dalam bentuk endpoint apapun dalam 1 constructor saja
    baik dalam bentuk countries, currency, name, symbol, dan lain lain, berikut merupakan daftar daftar sumber yang kami gunakan
    untuk dapat mendapatkan inspirasi logic untuk kode yang kami gunakan:

    https://stackoverflow.com/questions/49335930/add-multiple-key-value-pairs-in-a-javascript-object
    https://www.reddit.com/r/learnjavascript/comments/tt5emt/how_to_retrieve_multiple_keys_in_one_go_from_an/
    https://stackoverflow.com/questions/38171834/how-do-i-add-multiple-key-and-values-to-an-object-from-a-function-in-javascript
    https://community.postman.com/t/how-to-dynamically-pass-array-of-values-for-multiple-keys/57969
*/

// Create
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

// Read
const getCountryBy = async (req, res) => {
    try {
      const { key, value } = req.params;
      let countries = [];
  
      if (key === 'all') {
        countries = await Country.find();

/* Catatan Penting:

    Kami menggunakan condisi if/else khusus untuk field "languages" dikarenakan field tersebut merupakan tipe data Map, sehingga kami nilai perlu dibuat penanganan khusus.
    berikut merupakan daftar daftar sumber yang kami gunakan untuk dapat mendapatkan inspirasi logic untuk kode yang kami gunakan:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    https://youtu.be/uXRwk2pALco?si=-YP_Z_-migUh_aM3
    
*/
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

// Update
const updateCountryBy = async (req, res) => {
  try {
    const { key, value } = req.params;
    const updated = await Country.findOneAndUpdate({ [key]: value }, { $set: req.body }, { new: true });

    if (updated) {
      res.json({ message: 'berhasil memperbarui data negara', data: updated });
    } else {
      res.status(404).json({ message: 'negara tidak ditemukan' });
    }
  } catch (err) {
    res.status(500).json({ error: 'gagal memperbarui data' });
  }
};

// Delete
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