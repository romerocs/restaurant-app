const Categories = require("../models").Categories;

module.exports = {
    list(req, res) {
        return Categories.findAll()
            .then(restaurants => res.status(200).send(restaurants))
            .catch(error => res.status(400).send(error));
    }
}