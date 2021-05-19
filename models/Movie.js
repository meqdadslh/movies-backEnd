// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const movieSchema = new Schema(
  {
    name: String,
    img: String,
    description: String,
  },
  { timestamps: true }
);

// Create our Model Object
const Movie = model("movie", movieSchema);

// Export our Model Object
module.exports = Movie;