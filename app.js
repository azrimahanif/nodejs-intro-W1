const express = require("express");
const home = require('./controller/get/homeController');
const user = require('./controller/get/userController');
// create server
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   // Data to pass to the template (replace with your own data)
//   res.sendFile(__dirname + "/views/index.html");
// });


app.use(home)
app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});