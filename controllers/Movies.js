// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const Movie = require("../models/Movie");

// SEED DATA FOR SEED ROUTE
const placeSeed = [
  {
    name: "THE REVENANT",
    img: "https://prodimage.images-bn.com/pimages/0024543118701_p0_v1_s550x406.jpg",
    description: "Western Adventure Movie",
  },
  {
    name: "BEAUTIFUL MIND",
    img: "https://faroutmagazine.co.uk/static/uploads/2020/12/A-Beautiful-Mind-A-flawed-dramatisation-of-genius-and-insanity.jpg",
    description: "Romance and Drama Movie",
  },
  {
    name: "THE THEORY OF EVERYTHING",
    img: "https://upload.wikimedia.org/wikipedia/en/6/67/The_Theory_of_Everything_%282014%29.jpg",
    description: "Romance and Drama Movie",
  },
  {
    name: "THE THEORY OF EVERYTHING",
    img: "https://upload.wikimedia.org/wikipedia/en/6/67/The_Theory_of_Everything_%282014%29.jpg",
    description: "Romance and Drama Movie",
  },
];


// Index Route
router.get("/", async (Req, res) => {
    try {
      // query database for all the movies
      const movies = await Movie.find({});
      // send movies as JSON
      res.json(movies);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
//   Go to localhost:4000/movies to test


// CREATE Route
router.post("/", async (req, res) => {
    try {
      // pass the request body to create a new movie in the database
      const newMovie = await Movie.create(req.body);
      // send newly created movie back as JSON
      res.json(newMovie);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
//   Use postman to make a post request /movies with a new movie in the body.

// update Route
router.put("/:id", async (req, res) => {
    try {
      // pass the request body to update and existing movie in the database
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      // send newly updated movie back as JSON
      res.json(updatedMovie);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  //   Use postman to make an update request /movies and check the GET, see if that works. 

// update Route
router.delete("/:id", async (req, res) => {
    try {
      // delete an existing movie in the database
      const deletedMovie = await Movie.findByIdAndRemove(req.params.id);
      // send delete movie back as JSON
      res.json(deletedMovie);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });

// ROUTES (async, since database actions are asynchronous)

// // Seed Route for Seeding Database
// router.get("/seed", async (req, res) => {
//   // try block for catching errors
//   try {
//     // remove all movies from database
//     await Movie.remove({});
//     // add the seed data to the database
//     await Movie.create(placeSeed);
//     // get full list of movies to confirm seeding worked
//     const movies = await Movie.find({});
//     // return full list of movies as JSON
//     res.json(movies);
//   } catch (error) {
//     // return error as JSON with an error status
//     res.status(400).json(error);
//   }
// });

// export the router which has all our routes registered to it
module.exports = router;