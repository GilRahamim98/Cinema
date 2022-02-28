const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newSubscriptions = new Schema({
  memberId: String,
  movies: [
    {
      movieId: String,
      date: Date,
    },
  ],
});

module.exports = mongoose.model("Subscriptions", newSubscriptions);
