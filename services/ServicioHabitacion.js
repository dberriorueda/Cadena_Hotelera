import {modeloHabitacion} from '../models/modeloHabitacion.js'
export class ServicioHabitacion{

    constructor(){}

    async buscarTodas(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }
    async buscarPorId(id){
        let habitacion=await modeloHabitacion.findById(id)
        return habitacion
    }
    async modificar(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let habitacionNueva=new modeloHabitacion(datos)
        return await habitacionNueva.save()
    }
    async eliminar(id){
        try {
            const resultado = await modeloHabitacion.findByIdAndRemove(id)
            if(!resultado){
                throw new Error("No se encontro la habitacion con el id")
            }
            return {mensaje: "Habitacion eliminada", id: resultado._id}
        }catch(error){
            throw new Error("Error al eliminar la habitacion:" + error.message)
        }
        
    }

}