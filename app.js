const express = require("express");
const home = require('./controller/get/homeController');
// create server
const app = express();
const PORT = 3000;



app.use(home)
app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});