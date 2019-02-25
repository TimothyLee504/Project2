var db = require("../models");
var request = require('request');
var express = require('express');

module.exports = function (app) {

  app.get("/Movies", function (req, res) {


    db.Data.findAll({}).then(function (dbData) {
      res.render("index", { dbData })
      console.log(dbData)
    });
  });


  app.get("/cooking", function (req, res) {

    db.Food.findAll({}).then(function (dbFood) {
      res.render("cooking", { dbFood })
      console.log(dbFood)
    });
  });

  // Post new movies
  app.post('/api/new/movie', function (req, res) {

    var movieName = req.body.name;
    console.log(movieName)
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (error, response, body) {


      if (!error && JSON.parse(body).Response !== 'False') {



        db.Data.create({
          movie_name: JSON.parse(body).Title,
          movie_poster: JSON.parse(body).Poster,
          movie_genre: JSON.parse(body).Genre,
          movie_time: JSON.parse(body).Runtime,
          movie_plot: JSON.parse(body).Plot,
          movie_director: JSON.parse(body).Director,
          movie_actors: JSON.parse(body).Actors,
          movie_year: JSON.parse(body).Year,

          movie_ratingImdb: JSON.parse(body).Ratings[0].Value,
          movie_ratingRotten: JSON.parse(body).Ratings[1].Value

        }).then(function () {
          res.redirect("/Movies");
        });

      }
    });


  });





  app.get("/Books", function (req, res) {

    db.Books.findAll({}).then(function (dbBooks) {
      res.render("book", {dbBooks})
      console.log(dbBooks)
      
    });
  });





};













