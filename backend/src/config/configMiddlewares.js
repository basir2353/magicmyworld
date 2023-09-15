const cors = require("cors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const dotenv = require("dotenv").config();
module.exports = function (app) {
  app.use(cors());
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.json({ limit: "30mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  if (process.env.NODE_ENV === "development") {
    app.use(logger("dev"));
  }

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));



// Define a route to render the Pug page
// app.get('/email', (req, res) => {
//     res.render('ResetPassword',{ token: "dsfds" });
// })
app.get('/email', (req, res) => {
    res.render('email/Report',{ firstName:"Hello" });
})
// app.get('/email', (req, res) => {
//     res.render('ResetPassword', {  firstName:"jutt",
//         url: "fb.com",
//         subject:"no Subject",
//       data:{technician:"John2",barcode:"897324328"} });
//   });
};
