const {FlightService} = require('../services/index');

const flightService = new FlightService();

const createFlight = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully created a flight",
            err: {}
        });
    } catch (error) {
        console.log("Error in Controller Layer", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error while creating a flight",
            err: error
        });
    }
}

const getAllFlights = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: "Successfully fetched all flights",
            err: {}
        });
    } catch (error) {
        console.log("Error in Controller Layer", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error while fetching all flights",
            err: error
        });
    }
}


module.exports = {
    createFlight,
    getAllFlights
}