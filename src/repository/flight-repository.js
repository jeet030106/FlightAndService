const {Flight} = require('../models/index');
const { Op } = require('sequelize');
class FlightRepository{
    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.minPrice && data.maxPrice){
            filter.price = {
                [Op.between]: [data.minPrice, data.maxPrice]
            }
        }
        return filter;
    }
    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Error in Repository Layer", error);
            throw error;
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flights = await Flight.findAll({
                where: filterObject
            });
            return flights;
        } catch (error) {
            console.log("Error in Repository Layer", error);
            throw error;
        }
    }

    async getFlight(id){
        try {
            const flight = await Flight.findByPk(id);
            return flight;
        } catch (error) {
            console.log("Error in Repository Layer", error);
            throw error;
        }
    }

    async updateFlight(flightId, data){
        try{
            const flight = await Flight.update(data,{
                where : {
                    id : flightId
                }
            });
            return flight;
        }catch (error){
            console.log("Error in updating Flight")
            throw error;
        }
    }
}

module.exports = FlightRepository;