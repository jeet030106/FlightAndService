const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller');

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.getCity);
router.put('/city/:id', CityController.updateCity);

module.exports = router;