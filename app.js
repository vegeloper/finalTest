const path = require('path');
const express = require('express');
const emailRouter = require("./routes/emailRouter");

const app = express();

app.use(express.json({ limit: '10kb' })); // parse data from body
app.use(express.urlencoded({ extended: true, limit: '10kb' })); // parse data from urlencoded forms html requests.

app.use(express.static(path.join(__dirname, "client/build"))); 

app.use("/api/email", emailRouter);



if (process.env.NODE_ENV === "production") {

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
 
} else if (process.env.NODE_ENV === "development") {
  // Serve frontEnd
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
};


module.exports = app;
