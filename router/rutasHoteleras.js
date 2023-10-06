// Espacio para definir las rutas o endpoints especificos de su API
import express from "express";

export let rutasAPI = express.Router()

//Aca pone sus endpoints

rutasAPI.post("/api/habitaciones", function name(req, res) {
    res.send("estoy guardando una habitacion");  
})
rutasAPI.get("/api/habitaciones", function (req, res) {
  res.send("estoy buscando todas las habitaciones");
})
rutasAPI.get("/api/habitacion", function (req, res) {
  res.send("estoy buscando una habitacion");
})
rutasAPI.put("/api/habitaciones", function (req, res) {
  res.send("estoy modificando una habitacion");
})
rutasAPI.delete("/api/habitaciones", function (req, res) {
  res.send("estoy eliminando una habitacionn");
})