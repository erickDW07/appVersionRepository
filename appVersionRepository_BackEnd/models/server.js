import express from 'express';
import cors from 'cors'
import { routerAplicaciones } from '../routes/aplicaciones.js';
import { db } from '../db/config.js';




export class Server {
    constructor() {
        this.app = express();

        this.conexionDB();

        this.middelwares();

        this.routes();
    }

    async conexionDB(){
        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            throw new Error( error );
        }

    }

    middelwares() {
        this.app.use(cors());

        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api/appRepository', routerAplicaciones);
    }

    listen() {
        this.app.listen( 3030, () =>{
            console.log('Servidor corriendo', 3030);
        });
    }
}


