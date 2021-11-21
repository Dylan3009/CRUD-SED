const express = require('express');
const mongoose = require('mongoose');
const app = express();

const CountryModel = require("./models/Country");

app.use(express.json());

mongoose.connect("mongodb+srv://newUser:1234@sed.3u2ye.mongodb.net/country?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post('/insert', async(res, req) => {
    const country = new CountryModel({countryName: "Finland"})

    try{
        await country.save();
    } catch(err){
        console.log(err);
    }
})

app.listen(3001, () => {
    console.log("Server running 3001");
});