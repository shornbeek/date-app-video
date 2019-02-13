const express = require("express");
const mysql2 = require("mysql2");


let db = require('./models');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(require("./routes/api-routes.js"));

app.listen(PORT, ()=>{
    console.log("App listenign on " + PORT);
});
let routes = require('./controllers/liked.js');
let routes = require('./controllers/matches.js');
let routes = require('./controllers/users.js');

app.use('/', routes);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  