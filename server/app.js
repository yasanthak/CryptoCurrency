const express = require("express");

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
  const currencies =  [
    {
        "currency": "BTC",
        "date": "20180507",
        "quotes": [
            {
                "time": "0915",
                "price": "34.98"
            },
            {
                "time": "1045",
                "price": "36.13"
            },
            {
                "time": "1230",
                "price": "37.01"
            },
            {
                "time": "1400",
                "price": "35.98"
            },
            {
                "time": "1530",
                "price": "33.56"
            }
        ]
    },
    {
        "currency": "ETC",
        "date": "20180507",
        "quotes": [
            {
                "time": "0900",
                "price": "1.45"
            },
            {
                "time": "1030",
                "price": "1.87"
            },
            {
                "time": "1245",
                "price": "1.55"
            },
            {
                "time": "1515",
                "price": "2.01"
            },
            {
                "time": "1700",
                "price": "2.15"
            }
        ]
    },
    {
        "currency": "LTC",
        "date": "20180507",
        "quotes": [
            {
                "time": "0930",
                "price": "14.32"
            },
            {
                "time": "1115",
                "price": "14.87"
            },
            {
                "time": "1245",
                "price": "15.03"
            },
            {
                "time": "1400",
                "price": "14.76"
            },
            {
                "time": "1700",
                "price": "14.15"
            }
        ]
    }
]
  res.status(200).json(currencies);
});

module.exports = app;
