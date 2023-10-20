export class controladorHabitacion{
    constructor(){}

    buscartodas(request, response){
        try{
            response.status(200).json({
                "mensaje":"Exito buscando la habitacione",
                "datos":"Aca van los datos de consultados de la BD"
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos buscando la habitacion",
            })
        }
    }
    buscarporId(request,response){
        try{
            //1. hay que recibir datos(si)
            let id=request.params.id
            //2. Con el id que mando el cliente busco la habitacion en BD
            //3. Respondo al cliente
             response.status(200).json({
                "mensaje":"Exito buscando la habitacion",
                "datos":"Aca van los datos de consultados de la BD"
             })    

        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos buscando la habitacion"+error
            })
        }
    }
    modificar(request,response){
        try{
            //1. Hay que recibir datos(si)
            let id=request.params.id
            let datos=request.body
            //2. modificar en BD
            //3. enviar respuesta
            response.status(400).json({
                "mensaje":"Exito modificando la habitacion",
                "datos":"Aca los datos"
            })

        }catch(error){
             response.status(400).json({
                "mensaje":"Fallamos buscando la habitacion"+ error
            })
        }
    }
    registrar(request,response){
        try{
            //1. hay que recibir datos(si)
            let datos=request.body
            response.status(200).json({
                "mensaje":"Exito buscando los datos",
                "datos":"aca los datos"
            })
        }catch(error){
             response.status(400).json({
                "mensaje":"Fallamos registrando la habitacion"+error
            })
        }
    }
    eliminar(request,response){
        try{
            //1. hay que recibir datos(si)
            let id = request.params.id
            //2. eliminelo de la BD
            //3.responda
            response.status(400).json({
                "mensaje":"Exito borrando la habitacion",
                "datos":"aca los datos"
            })
        }catch(error){
             response.status(400).json({
                "mensaje":"Fallamos borrando la habitacion"+error
            })
        }
    }
}
