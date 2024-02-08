import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesUsers from '../routes/users.routes';
import routesEvents from '../routes/events.routes';
import db from '../db/connection';

class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnection();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor funcionando en el puerto ${this.port}`);
        });
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API working'
            })
        })
        this.app.use('/users', routesUsers);
        this.app.use('/events', routesEvents);
    }

    midlewares() {
        this.app.use(express.json());

        this.app.use(cors());

    }

    async dbConnection() {

        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log('Error al conectar la base de datos', error);
        }
    };
}



export default Server;
