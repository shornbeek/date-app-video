const express = require("express");
const app = express();
const mysql = require("mysql");
const mysql2 = require("mysql2");
const sequelize = require("sequelize");
const db = require("./models");
const server = require("http").createServer(app);
const io = require("socket.io")(server);


const PORT = process.env.PORT || 8080;
app.use(express.static("public"))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/api-routes.js")(app);

db.sequelize.sync({}).then(function() {
  server.listen(PORT, ()=>{
    console.log("App listening on PORT " + PORT);
  });
});