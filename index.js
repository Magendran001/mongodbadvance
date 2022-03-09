const express = require("express");

const mongoose = require("mongoose");
const app = express();
app.use(express.json());

//  refer read me file

//  refer read me file

//  refer read me file

//  refer read me file

//  refer read me file
//  refer read me file

//  refer read me file

//  refer read me file

//  refer read me file

//  refer read me file

const connect = mongoose.connect(
  "mongodb+srv://moviesdata:maggi001@cluster0.devxv.mongodb.net/web_15?retryWrites=true&w=majority"
);

const moviesschema = new mongoose.Schema({
  id: { type: String, require: true },
  movie_name: { type: String, require: true },
  movie_genre: { type: String, require: true },
  production_year: { type: Number, require: true },
  budget: { type: Number, require: true },
});

const moviesdata = mongoose.model("movies", moviesschema);

app.post("", async (req, res) => {
  try {
    let x = await moviesdata.create(req.body);
    return res.send(x);
  } catch (e) {
    console.log(e.message);
  }
});

app.get("", async (req, res) => {
  try {
    let x = await moviesdata.find({}).lean().exec();
    console.log(x);
    return res.send(x);
  } catch (e) {
    return res.send(e.message);
  }
});
app.listen(2896, async (req, res) => {
  try {
    console.log("listening on 2896 port");
    await connect;
  } catch (e) {
    console.log(e);
  }
});
