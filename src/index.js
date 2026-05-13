const express=require("express");
const bodyParser=require("body-parser");

const CityRepository=require("./repository/city-repository");

const {PORT} = require("./config/serverConfig");

const setUpAndStartServer=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
        const cityRepository = new CityRepository();
        cityRepository.createCity({name:"Delhi"});
    });
}

setUpAndStartServer();