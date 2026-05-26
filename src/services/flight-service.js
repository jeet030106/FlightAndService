const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/index');
class FlightService{

    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {

            if(!compareTime(data.deptTime, data.arrivalTime)){
                throw {message: "Departure time cannot be greater than arrival time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Error in Service Layer", error);
            throw error;
        }
    }

    async getAllFlights(data){
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Error in Service Layer", error);
            throw error;
        }
    }

    async getFlight(id){
        try {
            const flight = await this.flightRepository.getFlight(id);
            return flight;
        } catch (error) {
            console.log("Error in Service Layer", error);
            throw error;
        }
    }

    async updateFlight(flightId, data){
        try{
            const flight = await this.flightRepository.updateFlight(flightId, data);
            return flight;
        }catch (error){
            console.log("Error in Flight Service layer", error)
            throw error;
        }
    }
}

module.exports = FlightService;