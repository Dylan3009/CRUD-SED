const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const CountryModel = require("./models/Country");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://newUser:1234@sed.3u2ye.mongodb.net/country?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {

    const countryName = req.body.countryName;

    const country = new CountryModel({ countryName: countryName });

    try {
        await country.save();
    } catch (err) {
        console.log(err);
    }
});

app.get("/read", async (req, res) => {
    CountryModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        }

        res.send(result);
    });
});

app.put("/update", async (req, res) => {

    const newCountryName = req.body.newCountryName;
    const id = req.body.id;

    try {
        await CountryModel.findById(id, (err,updatedCountry) => {
            updatedCountry.countryName = newCountryName;
            updatedCountry.save();
            res.send("update");
        })
    } catch (err) {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await CountryModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

app.listen(3001, () => {
    console.log("Server running 3001");
});