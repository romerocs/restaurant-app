var express = require('express');
var router = express.Router();

const restCtrl = require('../controllers').restaurants;
const catCtrl = require('../controllers').categories;
const mealCtrl = require('../controllers').meal;
const yelp = require('../external/yelp').search;

router.post('/restaurant/add', restCtrl.create);
router.put('/restaurant/update/:id', restCtrl.update);
router.get('/restaurant/:category', restCtrl.category);
router.get('/restaurant/random/:category/:meal', restCtrl.random);
router.delete('/restaurant/delete/:id', restCtrl.destroy);

router.get('/categories/', catCtrl.list);

router.get('/meal/', mealCtrl.list);

router.get('/restaurants/list', restCtrl.list);
router.get('/search/restaurants/:term', yelp);

module.exports = router;
