const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newMovie = new Schema({
    name: String,
    genres: [],
    image: String,
    premiered: Date
});

module.exports = mongoose.model("Movies", newMovie);
