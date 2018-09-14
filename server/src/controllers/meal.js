const Meal = require("../models").Meal;

module.exports = {
    list(req, res) {
        return Meal.findAll()
            .then(meal => res.status(200).send({content: meal, type: "meal"}))
            .catch(error => res.status(400).send(error));
    }
}