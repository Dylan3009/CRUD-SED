const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    countryName: {
        type: String,
        required: true,
    },
});

const Country = mongoose.model("Country", CountrySchema);

module.exports = Country;