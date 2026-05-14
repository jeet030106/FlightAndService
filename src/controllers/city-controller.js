const {CityService} = require('../services/index');

const cityService = new CityService();


// Post req -> city/create
const create = async (req,res) => {
    try {
        const response= await cityService.createCity(req.body);
        return res.status(201).json({
            data : response,
            message: "Successfully created a city",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log("Error in creating city", error);
        res.status(500).json({
            data:{},
            message: "Something went wrong in creating city",
            success: false,
            err: error
        });
    }
}


// Delete req -> city/:id
const destroy = async (req,res) => {
    try {
        const response= await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            message: "Successfully deleted a city",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log("Error in deleting city", error);
        res.status(500).json({
            data:{},
            message: "Something went wrong in deleting city",
            success: false,
            err: error
        });
    }
}


// Get req -> city/:id
const getCity = async (req,res) => {
    try {
        const response= await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            message: "Successfully retrieved the city",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log("Error in retrieving city", error);
        res.status(500).json({
            data:{},
            message: "Something went wrong in retrieving city",
            success: false,
            err: error
        });
    }
}


// Patch req -> city/:id
const updateCity = async (req,res) => {
    try {
        const response= await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : response,
            message: "Successfully updated the city",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log("Error in updating city", error);
        res.status(500).json({
            data:{},
            message: "Something went wrong in updating city",
            success: false,
            err: error
        });
    }
}

const getAllCities = async (req,res) => {
    try {
        const response= await cityService.getAllCities(req.query);
        return res.status(200).json({
            data : response,
            message: "Successfully retrieved all cities",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log("Error in retrieving cities", error);
        res.status(500).json({
            data:{},
            message: "Something went wrong in retrieving cities",
            success: false,
            err: error
        });
    }
}


module.exports = {
    create,
    destroy,
    getCity,
    updateCity,
    getAllCities
}