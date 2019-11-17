const express = require("express");
var fs = require('fs');
var datafile = 'server/data/currency.json';
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS"
  );
  next();
});

app.get("/api/currencies", (req, res, next) => {

const data = fs.readFileSync(datafile, 'utf8');
  res.status(200).json(JSON.parse(data));
});

module.exports = app;
