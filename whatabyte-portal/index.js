/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    //res.status(200).send("WHATABYTE: Food For Devs");
    res.sendFile(__dirname + '/index.html');
  });

  /**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });