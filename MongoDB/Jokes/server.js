const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//this should be on the top

//server will know that about the database.
require("./server/config/mongoose.config");
require("./server/routes/jokes.routes")(app); //routes will know about the app.




app.listen( port, () => console.log(`Listening on port: ${port}`) );