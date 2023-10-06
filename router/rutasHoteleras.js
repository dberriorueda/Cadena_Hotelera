// Espacio para definir las rutas o endpoints especificos de su API
import express from "express";

export let rutasAPI = express.Router();

//importo los controladores
import { controladorHabitacion } from "../controles/controladorHabitacion.js"

//Aca pone sus endpoints

rutasAPI.post("/api/habitaciones")
rutasAPI.get("/api/habitaciones")
rutasAPI.get("/api/habitacion/:id") 
rutasAPI.put("/api/habitaciones/:id")
rutasAPI.delete("/api/habitaciones/:id") 