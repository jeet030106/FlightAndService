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

module.exports = {
    createFlight
}