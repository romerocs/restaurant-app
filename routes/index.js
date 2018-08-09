var express = require("express");
var router = express.Router();

const restCtrl = require("../controllers/restaurants.js");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/api", function(req, res, next) {
    res.status(200).send({
        message: "Welcome to the Movies Roulette API!"
    });
});

router.post("/api/restaurant/", restCtrl.create);
router.get("/api/restaurant/:category", restCtrl.list);
router.delete("/api/restaurant/:id", restCtrl.destroy);

module.exports = router;