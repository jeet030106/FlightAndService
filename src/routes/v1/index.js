const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');


router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.getCity);
router.put('/city/:id', CityController.updateCity);
router.get('/city', CityController.getAllCities);

router.post('/flight', FlightController.createFlight);
router.get('/flight', FlightController.getAllFlights);
router.get('/flight/:id', FlightController.getFlight);
router.patch('/flight/:id',FlightController.updateFlight);

router.post('/airport', AirportController.createAirport);

module.exports = router;