//Esta clase representa un servidor
import express from "express";
import cors from 'cors'
import {rutasAPI} from "./router/rutasReserva.js"
import { establecerConexionBD } from "./database/conexion.js";


export class Api {
  constructor() {
    this.app = express()
    this.conectarBD()
    this.procesarPeticiones()
  }

  //1. Levantar el servidor
  levantarServidor() {
    this.app.listen(process.env.PORT, function () {
      console.log("servidor operando");
    });
  }

  //2. Atiende las peticiones y responde
  procesarPeticiones() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use("/",rutasAPI)
    
  }

  //3. Se conecta a la Base de Datos
  conectarBD(){
    establecerConexionBD()
  }
  
}