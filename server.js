const express = require("express");
const cors = require("cors")
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8000;

app.use( express.json() ); // tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); // tells my app that it can gather form information
app.use(cors()); // tells the app that it is allowed to share resources  

require("./server/config/config");

// require the routes
require("./server/routes/petShelter.routes")(app)



//app.listen needs to be at the end of the file
app.listen( port, () => console.log(`Listening on port: ${port}`) );