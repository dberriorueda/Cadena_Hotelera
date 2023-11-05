import { modeloReserva } from "../models/modeloReserva.js"
import { ServicioReserva } from "../services/ServicioReserva.js"

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
    async buscarPorId(request,response){
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

            //Crear el modelo de reserva
            let nuevaReserva = new modeloReserva({
                nombreCliente: datos.nombreCliente,
                apellidoCliente: datos.apellidoCliente,
                telefono: datos.telefono,
                fechaInicio: datos.fechaInicio,
                fechaFinal: datos.fechaFinal,
                numeroPersonas: datos.numeroPersonas,
            })
            let reservaGuardada = await nuevaReserva.save()
            response.status(201).json({
                "mensaje":"Reserva registrada con exito",
                "datos": reservaGuardada,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Reserva no guardada"+error
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

