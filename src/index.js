const express=require("express");
const bodyParser=require("body-parser");

const CityRepository=require("./repository/city-repository");
const routes=require("./routes/index");
const db=require("./models/index");

const {PORT} = require("./config/serverConfig");

const setUpAndStartServer=async()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', routes);
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
    });
}

setUpAndStartServer();