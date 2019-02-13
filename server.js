const express = require("express");
const mysql2 = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(require("./routes/api-routes.js"));

db.sequelize.sync().then(function(){

    app.listen(PORT, ()=>{
        console.log("App listenign on " + PORT);
    });

});