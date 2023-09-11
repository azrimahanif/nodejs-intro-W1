const { Router } = require('express');
const app = Router();
const path = require("path");
  
app.get("/", (req, res) => {

    const htmlpath = path.join(__dirname, "../../views/index.html")
    // Data to pass to the template (replace with your own data)
    res.sendFile(htmlpath);
  });
  
module.exports = app;