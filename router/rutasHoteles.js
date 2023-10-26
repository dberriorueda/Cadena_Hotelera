//espacio para definir las rutas
//o endpoints especificos de SU API
import express from "express";

import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
let controlador=new ControladorHabitacion()

export let rutasAPI = express.Router();

//ACA PONE SUS ENDPOINTS
rutasAPI.post("/api/habitaciones", controlador.registrar)
rutasAPI.get("/api/habitaciones",controlador.buscartodas )
rutasAPI.get("/api/habitacion/:id", controlador.buscarporId)
rutasAPI.put("/api/habitaciones/:id", controlador.modificar)
rutasAPI.delete("/api/habitaciones/:id", controlador.eliminar)