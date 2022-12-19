const express = require("express");
const { hashPassword } = require("./auth.js");
const movieHandlers = require("./movieHandlers");
const userHandlers = require("./userHandlers");

const app = express();

const port = 5000;

const routes = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);
app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUsersById);

app.post("/api/users", jsonParser, hashPassword, userHandlers.postUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
    console.log("hello!!!!");
    console.log("hi there!");
  }
}); 




