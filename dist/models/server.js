"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const miembrosController_1 = __importDefault(require("../controllers/miembrosController"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            miembros: '/api/miembros'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    //Todo: Conectar a base de datos 
    dbConnection() {
        connection_1.default.connect((err) => {
            if (err)
                throw err;
            console.log('Database Online!');
        });
    }
    //funciones que se ejecutan antes que pasan las rutas o procedimientos
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)({}));
        //Lectura del body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    //Definicion de rutas
    routes() {
        this.app.use(this.apiPaths.miembros, miembrosController_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map