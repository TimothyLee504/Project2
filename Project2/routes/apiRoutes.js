var db = require("../models");
var request = require('request');
var express = require('express');
    var router = express.Router();

// var view = require("../public/js/view.js");
module.exports = function (app) {
  app.get("/sad", function(req,res) {
  
    request("http://www.omdbapi.com/?t=christine&y=&plot=short&apikey=trilogy", function (error, response, body) {
  if (!error && response.statusCode == 200) {

body = JSON.parse(body);
console.log(body)
res.json("Title of the movie is "+ body.Title  +  ". Year the movie came out- " + body.Year +". IMDB Rating of the movie- " + 
body.imdbRating + ". Rotten Tomatoes Rating of the movie- "+body.Ratings[1].Value +". Country where the movie was produced- "+
body.Country+ ". Language of the movie- "+body.Language +". Plot of the movie- "+body.Plot 
+". Actors in the movie- " + body.Actors);
// "&apikey=8dba70a1"
  }
  
});

      
     
    });

  app.get("/sad/:moviename", function(req,res) {
  
    request("http://www.omdbapi.com/?t="+req.params.moviename+"&y=&plot=short&apikey=trilogy", function (error, response, body) {
  if (!error && response.statusCode == 200) {

body = JSON.parse(body);
console.log(body)
res.json("Title of the movie is "+ body.Title  +  ". Year the movie came out- " + body.Year +". IMDB Rating of the movie- " + 
body.imdbRating + ". Rotten Tomatoes Rating of the movie- "+body.Ratings[1].Value +". Country where the movie was produced- "+
body.Country+ ". Language of the movie- "+body.Language +". Plot of the movie- "+body.Plot 
+". Actors in the movie- " + body.Actors);
// "&apikey=8dba70a1"
  }
  
});

      
     
    });

    

    app.get("/Happy/:moviename", function(req,res) {
  
      request("http://www.omdbapi.com/?t="+req.params.moviename+"&y=&plot=short&apikey=trilogy", function (error, response, body) {
    if (!error && response.statusCode == 200) {
  
  body = JSON.parse(body);
  console.log(body)
  res.json("Title of the movie is "+ body.Title  +  ". Year the movie came out- " + body.Year +". IMDB Rating of the movie- " + 
  body.imdbRating + ". Rotten Tomatoes Rating of the movie- "+body.Ratings[1].Value +". Country where the movie was produced- "+
  body.Country+ ". Language of the movie- "+body.Language +". Plot of the movie- "+body.Plot 
  +". Actors in the movie- " + body.Actors);
  // "&apikey=8dba70a1"
    }
    
  });
  
        
       
      });


      app.get("/Happy", function(req,res) {
  
        request("http://www.omdbapi.com/?t=Happiness&y=&plot=short&apikey=trilogy", function (error, response, body) {
      if (!error && response.statusCode == 200) {
    
    body = JSON.parse(body);
    console.log(body)
    res.json("Title of the movie is "+ body.Title  +  ". Year the movie came out- " + body.Year +". IMDB Rating of the movie- " + 
    body.imdbRating + ". Rotten Tomatoes Rating of the movie- "+body.Ratings[1].Value +". Country where the movie was produced- "+
    body.Country+ ". Language of the movie- "+body.Language +". Plot of the movie- "+body.Plot 
    +". Actors in the movie- " + body.Actors);
    // "&apikey=8dba70a1"
      }
      
    });
    
          
         
        });
    
        app.get("/Angry", function(req,res) {
  
          request("http://www.omdbapi.com/?t=The+hangover&y=&plot=short&apikey=trilogy", function (error, response, body) {
        if (!error && response.statusCode == 200) {
      
      body = JSON.parse(body);
      console.log(body)
      res.json("Title of the movie is "+ body.Title  +  ". Year the movie came out- " + body.Year +". IMDB Rating of the movie- " + 
      body.imdbRating + ". Rotten Tomatoes Rating of the movie- "+body.Ratings[1].Value +". Country where the movie was produced- "+
      body.Country+ ". Language of the movie- "+body.Language +". Plot of the movie- "+body.Plot 
      +". Actors in the movie- " + body.Actors);
      // "&apikey=8dba70a1"
        }
        
      });
      
            
           
          });

          app.get("/Angry/:moviename", function(req,res) {
  
            request("http://www.omdbapi.com/?t="+req.params.moviename+"&y=&plot=short&apikey=trilogy", function (error, response, body) {
          if (!error && response.statusCode == 200) {
        
        body = JSON.parse(body);
        console.log(body)
        res.json("Title of the movie is "+ body.Title  +  ". Year the movie came out- " + body.Year +". IMDB Rating of the movie- " + 
        body.imdbRating + ". Rotten Tomatoes Rating of the movie- "+body.Ratings[1].Value +". Country where the movie was produced- "+
        body.Country+ ". Language of the movie- "+body.Language +". Plot of the movie- "+body.Plot 
        +". Actors in the movie- " + body.Actors);
        // "&apikey=8dba70a1"
          }
          
        });
        
              
             
            });



       
      
    



};
