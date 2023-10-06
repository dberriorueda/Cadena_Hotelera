// Espacio para definir las rutas o endpoints especificos de su API
import express from "express";

export let rutasAPI = express.Router();

//Aca pone sus endpoints

rutasAPI.post("/api/habitaciones")
rutasAPI.get("/api/habitaciones")
rutasAPI.get("/api/habitacion/:id") 
rutasAPI.put("/api/habitaciones/:id") //Mandar datos
rutasAPI.delete("/api/habitaciones/:id") //Eliminar 