var express = require("express");
var router = express.Router();

const restCtrl = require("../controllers").restaurants;
const catCtrl = require("../controllers").categories;
const mealCtrl = require("../controllers").meal;
const yelp = require("../external/yelp").search;

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/api", function(req, res, next) {
    res.status(200).send({
        message: "Welcome to the Restaurant API!"
    });
});

router.post("/api/restaurant/add", restCtrl.create);
router.put("/api/restaurant/update/:id", restCtrl.update);
router.get("/api/restaurant/:category", restCtrl.category);
router.get("/api/restaurant/random/:category/:meal", restCtrl.random);
router.delete("/api/restaurant/:id", restCtrl.destroy);

router.get("/api/categories/", catCtrl.list);

router.get("/api/meal/", mealCtrl.list);

router.get("/api/search/restaurants/:term", yelp);

module.exports = router;