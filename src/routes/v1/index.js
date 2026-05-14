const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');


router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.getCity);
router.put('/city/:id', CityController.updateCity);
router.get('/city', CityController.getAllCities);

router.post('/flight', FlightController.createFlight);

module.exports = router;