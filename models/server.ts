
import express, { Application} from 'express'
import userRoutes from '../controllers/miembrosController';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        miembros: '/api/miembros'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        //Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
        
    }

    //Todo: Conectar a base de datos 
    dbConnection () {
        db.connect((err) => {
        if(err) throw err;
        console.log('Database Online!');
    });  
   }


    //funciones que se ejecutan antes que pasan las rutas o procedimientos
    middlewares (){

        //CORS
        this.app.use( cors({

        }))

        //Lectura del body
        this.app.use( express.json());

        //carpeta publica
        this.app.use( express.static('public'));
    }

    //Definicion de rutas
    routes(){
        this.app.use( this.apiPaths.miembros, userRoutes)
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto' + this.port);
        })
    }
}

export default Server;