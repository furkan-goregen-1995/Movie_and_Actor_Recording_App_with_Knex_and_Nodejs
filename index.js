const express = require('express');
const aktorlerRouter = require("./routers/aktorlerRouters");
const logger = require('./Middlewares/logger');
const errorHandling = require("./Middlewares/errorHandling");

const server = express();
server.use(express.json());
server.use(logger);
server.use("/aktorler",aktorlerRouter);

server.get('/',(req,res)=>{
    res.send("Express'ten merhaba");
});

server.use(errorHandling);
server.listen(5000,()=>{
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor...");
});