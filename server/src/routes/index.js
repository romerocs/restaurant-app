var express = require("express");
var router = express.Router();

const restCtrl = require("../controllers").restaurants;
const catCtrl = require("../controllers").categories;
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

router.post("/api/restaurant/", restCtrl.create);
router.get("/api/restaurant/:category", restCtrl.list);
router.delete("/api/restaurant/:id", restCtrl.destroy);

router.get("/api/categories/", catCtrl.list);

router.get("/api/search/restaurants/:term", yelp);

module.exports = router;