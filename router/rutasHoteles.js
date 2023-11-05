//espacio para definir las rutas
//o endpoints especificos de SU API
import express from "express";

import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'

let controlador=new ControladorHabitacion()
export let rutasAPI = express.Router();

//ACA PONE SUS ENDPOINTS
rutasAPI.post("/api/habitaciones", controlador.registrar) //POST se utiliza para crear una reserva
rutasAPI.get("/api/habitaciones",controlador.buscartodas ) // GET para obtener todas las reservas
rutasAPI.get("/api/habitacion/:id", controlador.buscarporId) // GET  para buscar una reserva por id
rutasAPI.put("/api/habitaciones/:id", controlador.modificar) // PUT para modificar una reserva
rutasAPI.delete("/api/habitaciones/:id", controlador.eliminar) // DELETE para elimiinar una reserva
