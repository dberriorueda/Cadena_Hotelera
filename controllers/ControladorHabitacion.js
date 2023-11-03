import { modeloHabitacion } from "../models/modeloHabitacion.js"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
export class ControladorHabitacion{
    constructor(){}

    async buscartodas(request, response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la habitaciones",
                "datos": await servicioHabitacion.buscarTodas()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos buscando la habitacion",
            })
        }
    }
    async buscarporId(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            //1. hay que recibir datos(si)
            let id=request.params.id
            //2. Con el id que mando el cliente busco la habitacion en BD
            //3. Respondo al cliente
             response.status(200).json({
                "mensaje":"Exito buscando la habitacion",
                "datos": await servicioHabitacion.buscarPorId(id)
             })    

        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos buscando la habitacion"+error
            })
        }
    }
    async modificar(request,response){
        try{
            let servicioHabitacion =new ServicioHabitacion()
            //1. Hay que recibir datos(si)
            let id=request.params.id
            let datos=request.body
            await servicioHabitacion.modificar(id,datos)
            //2. modificar en BD
            //3. enviar respuesta
            response.status(200).json({
                "mensaje":"Exito modificando la habitacion",
                "datos":"Habitacion modificada con exito"
            })

        }catch(error){
             response.status(400).json({
                "mensaje":"Fallamos buscando la habitacion"+ error
            })
        }
    }
    async registrar(request,response){
        try{
            let servicioHabitacion =new ServicioHabitacion()
            //1. hay que recibir datos(si)
            let datos=request.body
            let nuevaHabitacion = new modeloHabitacion({
                nombre: datos.nombre,
                foto: datos.foto,
                descripcion:datos.descripcion,
                precioNoche: datos.precioNoche
            })

            await nuevaHabitacion.save()
            response.status(200).json({
                "mensaje":"Exito registrando la habitacion",
                "datos": nuevaHabitacion
            })
        }catch(error){
             response.status(400).json({
                "mensaje":"Fallamos registrando la habitacion"+error
            })
        }
    }
    async eliminar(request,response){
        try{
            let servicioHabitacion =new ServicioHabitacion()
            //1. hay que recibir datos(si)
            let id = request.params.id
            await servicioHabitacion.eliminar(id)
            //2. eliminelo de la BD
            //3.responda
            response.status(200).json({
                "mensaje":"Exito borrando la habitacion",
                "datos":"Habitacion ha sido eliminada"
            })
        }catch(error){
             response.status(400).json({
                "mensaje":"Fallamos borrando la habitacion"+error,
                "datos": "Error al eliminar la habitacion con ID" + id
            })
        }
    }
}
