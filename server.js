let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");

let db = require('./models');


let app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=PUT
app.use(methodOverride("_method"));

// Handlebars
let exphbs = require("express-handlebars");

// Initialize Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
let routes = require('./controllers/burgerController.js');

app.use('/', routes);

// Syncing our sequelize models and then starting our express app
// db.sequelize.sync({ force: true }).then(function() {
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});