const sequelize = require('sequelize');
const Restaurants = require("../models").Restaurants;

module.exports = {
    create(req, res) {
        return Restaurants.create({
            name: req.body.name,
            category: req.body.category,
            address: req.body.address,
            meal: req.body.meal
        })
        .then(restaurant => res.status(201).send(restaurant))
        .catch(error => res.status(400).send(error));
    },
    category(req, res) {
        return Restaurants.findAll({
            where: {
                category: req.params.category
            }
        })
            .then(restaurants => res.status(200).send(restaurants))
            .catch(error => res.status(400).send(error));
    },
    random(req, res) {
        return Restaurants.findOne({
            where: {
                category: req.params.category,
                meal: {[sequelize.Op.contains]: [req.params.meal]}
            },
            order: sequelize.fn('RANDOM')
        })
            .then(restaurants => res.status(200).send(restaurants))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Restaurants.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(restaurants => {
                if (!restaurants) {
                    return res.status(404).send({
                        message: "Restaurant Not Found"
                    });
                }

               
                return restaurants
                    .update({
                        name: req.body.name || restaurants.name,
                        category: req.body.category || restaurants.category, 
                        address: req.body.address || restaurants.address,
                        meal: req.body.meal || restaurants.meal
                    })
                    .then(updatedRest =>
                        res.status(200).send(updatedRest)
                    )
                    .catch(error => res.status(400).send(error));
            })
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