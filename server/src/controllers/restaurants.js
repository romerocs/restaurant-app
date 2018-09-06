const Restaurants = require("../models").Restaurants;

module.exports = {
    create(req, res) {
        return Restaurants.create({
            name: req.body.name,
            category: req.body.category,
            address: req.body.address,
            breakfast: req.body.breakfast ? req.body.breakfast : false,
            brunch: req.body.brunch ? req.body.brunch : false,
            lunch: req.body.lunch ? req.body.lunch : false,
            dinner: req.body.dinner ? req.body.dinner : false
        })
        .then(restaurant => res.status(201).send(restaurant))
        .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Restaurants.findAll({
            where: {
                category: req.params.category
            }
        })
            .then(restaurants => res.status(200).send(restaurants))
            .catch(error => res.status(400).send(error));
    },
    destroy(req, res) {
        return Restaurants.find({
            where: {
                id: req.params.id
            }
        })
            .then(restaurant => {
                if (!restaurant) {
                    return res.status(404).send({
                        message: "Rated Item Not Found"
                    });
                }

                return restaurant
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
}