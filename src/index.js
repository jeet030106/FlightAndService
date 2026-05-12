const express=require("express");


const {PORT} = require("./config/serverConfig");

const setUpAndStartServer=()=>{
    
    const app=express();
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}

setUpAndStartServer();