const {AirportService} = require('../services/index');
const airportService = new AirportService();

const createAirport = async (req, res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created a airport",
            err: {}
        });
    } catch (error) {
        console.log("Error in Controller Layer", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Error in controller while creating a airport",
            err: error
        });
    }
}

module.exports = {
    createAirport
}