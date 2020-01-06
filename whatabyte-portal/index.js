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
app.use(express.urlencoded({extended:true}));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    //res.status(200).send("WHATABYTE: Food For Devs");
    console.log("GET request at port 8000 ....");
    console.log(req.hostname);
    console.log(req.headers["accept-language"]);
    res.sendFile(__dirname + '/index.html');
    
  });

  app.post("form_submit",(req,res) => {
    console.log("recvd post request");
    console.log(req.baseUrl);
    console.log(req.hostname);
  });

  

  /**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });