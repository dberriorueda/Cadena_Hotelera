export class controladorHabitacion{
    constructor(){}

    buscartodas(request, response){
        try{
            //1. hay que recibir datos
            //2. Intentare conectarme a BD
            //3. Envio la respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la habitacione",
                "datos":"Aca van los datos de consultados de la BD"
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando la habitacione",
                "datos":null 
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
                "estado":true,
                "mensaje":"Exito buscando la habitacion",
                "datos":"Aca van los datos de consultados de la BD"
             })    

        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando la habitacion"+error,
                "datos":null 
            })
        }
    }
    modificar(request,response){
        try{
            //1. Hay que recibir datos(si)
            let idHabitacion=request.params.id
            let datosModificar=request.params.body
            //2. modificar en BD
            //3. enviar respuesta
            response.status(400).json({
                "estado":false,
                "mensaje":"Exito modificando la habitacion"+error,
                "datos":null 
            })

        }catch(error){
             response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando la habitacion",
                "datos":null 
            })
        }
    }
    registrar(request,response){
        try{
            //1. hay que recibir datos(si)
            let datosRegistrar=request.body
            //2. guardelos en BD
            //3. responda

        }catch(error){
             response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos registrando la habitacion",
                "datos":null 
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
                "estado":false,
                "mensaje":"Exito borrando la habitacion"+error,
                "datos":null 
            })

        }catch(error){
             response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos borrando la habitacion"+error,
                "datos":null 
            })
        }
    }
}
