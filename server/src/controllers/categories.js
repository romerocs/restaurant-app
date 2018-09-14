const Categories = require("../models").Categories;

module.exports = {
    list(req, res) {
        return Categories.findAll()
            .then(restaurants => res.status(200).send({content: restaurants, type: "categories"}))
            .catch(error => res.status(400).send(error));
    }
}