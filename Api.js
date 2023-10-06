//Esta clase representa un servidor
import express from "express";
import { rutasAPI } from "./router/rutasHoteleras.js";

export class Api{
    constructor(){
        this.app = express()
        this.procesarPeticion()
    }

    //1. Levantar peticion
    levantarServidor() {
        this.app.listen(3000, function() {
            console.log("servidor operando")
            
        })
    }

    //2. Atiende las peticiones y responde
    procesarPeticion(){
        this.app.use("/",rutasAPI)
        this.app.use(express.json())
    }

    // se conecta a la Base de datos
}    