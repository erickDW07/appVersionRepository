
import { request, response } from 'express';
import { AppsList } from '../models/appsList.js';



export const getAplicaciones = async( req= request , res= response ) => {

    const apps = await AppsList.findAll();

    res.json({        
        apps 
    });
}


export const postAplicacion = async( req= request , res= response ) => {

    const { body } = req;
    
    try {        
        const existeApp = await AppsList.findOne({
            where: { 
                nombre: body.nombre, version: body.version
            }
        });
        
        if (existeApp) {
            return res.status(400).json({
                app : {id: existeApp.id},
                msg: 'Ya existe una aplicacion con ese nombre'
            });
        }


        const app = new AppsList(body);
        await app.save();

        res.json( {
            status: true,
            app
        } );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            status: false,
            msg: 'Opps Algo salio mal, contacta al administrador',
            error          
        })    
    }



}

export const putAplicacion = async( req= request , res= response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const app = await AppsList.findByPk( id );
        if ( !app ) {
            return res.status(404).json({
                status: false,
                msg: 'No existe esa applicacion '
            });
        }

        await app.update( body );

        res.json({
            status: true,
            app
        } );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            status: false,
            msg: 'Opps Algo salio mal, contacta al administrador'
        })    
    }   
}


