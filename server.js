const express =  require("express");

const app =  express();
const PORT = process.env.PORT || 8080;

const exphbs = require("express-handlebars");

const db = require("./models");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// routes go here
const routes = require("./controller/burger-controller");

app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, ()=>{
        console.log("server is live on http://localhost:8080");
    })
})
