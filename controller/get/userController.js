const { Router } = require('express');
const app = Router();
  
app.get('/user', (req, res) => {
    res.send("User");
});
  
module.exports = app;