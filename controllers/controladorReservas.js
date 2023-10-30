import { ServicioReserva } from "express"

export class ControladorReserva{
    constructor(){}

    async buscaTodas(request, response){
        try{
            let servicioReserva = new ServicioReserva()
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando los datos",
                "datos": await servicioReserva.buscaTodas()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos"+error
            })
        }
    }
    async buscarPorId(request,request){
        try{
            let servicioReserva = new ServicioReserva()
            let id = request.params.id
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando los datos",
                "datos": await servicioReserva.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos"+error
            })
        }
    }
    async modificar(request,response){
        try{
            let servicioReserva = new ServicioReserva()
            let id = request.params.id
            let datos = request.body
            await servicioReserva.modificar(id,datos)
            response.status(200).json({
                "mensaje":"Exito buscando los datos",
                "datos":"aca los datos"
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallams"+error
            })
        }
    }
    async registrar (request,response){
        try{
            let servicioReserva = new ServicioReserva()
            let datos = request.body
            response.status(200).json({
                "mensaje":"Exito buscando los datos",
                "datos":datos,
                "diferencia":"Diferencia en dias calculado"
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos"+error
            })
        }
    }
    async eliminar (request, response){
        try{
            let servicioReserva = new ServicioReserva()
            let id = request.params.id
            response.status(200).json({
                "mensaje":"Exito buscando los datos",
                "datos":"aca los datos"
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos"+error
            })
        }
    }
}

