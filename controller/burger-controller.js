const express = require("express");
const app =  express();

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = require("../models");

const router = express.Router();

router.get("/", (req, res) => {
    db.Burger.findAll({}).then(data => {
        // console.log(data);
        let sendObj = {
            burgers: data,
        }
        res.render("index", sendObj);
    })
})

router.post("/api/burger", (req, res) => {
    console.log(req.body)
    db.Burger.create({
        name: req.body.name,
        devoured: false
    }).then(data=>{
        res.json(data);
    })
})

router.delete("/api/burger/:id", (req, res) => {
    db.Burger.destroy({
        where: {
            id: req.params.id,
        }
    }).then(result => {
        res.json({ok:true})
    })
});

router.put("/api/burger/:id", (req, res) => {
    db.Burger.update({
        devoured: req.body.devoured,
    }, {
        where: {
            id: req.params.id
        }
    }).then(result =>{
        res.json({ok: true});
    })
})



module.exports = router;