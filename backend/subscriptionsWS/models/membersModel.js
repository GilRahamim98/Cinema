const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newMember = new Schema({
    name: String,
    email: String,
    city: String
});

module.exports = mongoose.model("Members", newMember);
