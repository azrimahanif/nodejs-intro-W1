const express = require("express");
const home = require('./controller/get/homeController');
const user = require('./controller/get/userController');
// create server
const app = express();
const PORT = 3000;

// // create route /
// app.get("/", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.send("<h1>Home</h1>");
// });

// app.use((req, res) => {
//   res.writeHead(404, { "Content-Type": "text/html" });
//   res.send("<h1>Not found</h1>");
// });

// app.use(home);
// app.use(user);
app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});