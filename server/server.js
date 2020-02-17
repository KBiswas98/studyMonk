const express = require("express");
const mongoose = require("mongoose");
const upload = require("express-fileupload");
const dotenv = require("dotenv");
const fs = require("fs");
var cors = require("cors");
const PORT = 5000;

const app = express();

app.use(
    express.urlencoded({
      extended: false
    })
  );
app.use(express.json());
app.use(upload());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);
dotenv.config();


const campainRoute = require("./src/routes/Campain_route");

app.use("/campain", campainRoute);

app.get("/", (req, res, next) => {
  res.send("Woo it works.");
});

mongoose
  .connect(
    process.env.MongoUrl,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    app.listen(PORT, console.log(`Server started at porst ${PORT}`));
  })
  .catch(err => console.log(err));
