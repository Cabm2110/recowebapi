"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMiembro = exports.putMiembro = exports.postMiembro = exports.getMiembro = exports.getMiembros = void 0;
const miembrosOperations_1 = require("../db/miembrosOperations");
const connection_1 = __importDefault(require("../db/connection"));
const getMiembros = (req, res) => {
    (0, miembrosOperations_1.readMiembros)(connection_1.default, (err, result) => {
        if (Object.entries(result).length != 0) {
            res.json({ result });
        }
        else if (err) {
            res.status(400).json({
                status: 400,
                msg: ' No se encontraron miembros activos!',
                err
            });
        }
        else {
            res.status(400).json({
                status: 400,
                msg: ' No se encontraron miembros activos!',
                err
            });
        }
    });
};
exports.getMiembros = getMiembros;
const getMiembro = (req, res) => {
    const { id } = req.params;
    (0, miembrosOperations_1.readMiembroId)(id, connection_1.default, (err, result) => {
        if (err)
            res.status(400).json({
                status: 400,
                msg: ' No se encontraron miembros activos!',
                err
            });
        if (Object.entries(result).length != 0) {
            res.json({ result });
        }
        else {
            res.status(400).json({
                status: 400,
                msg: ' No se encontraron miembros activos!',
                err
            });
        }
    });
};
exports.getMiembro = getMiembro;
const postMiembro = (req, res) => {
    const { body } = req;
    (0, miembrosOperations_1.insertMiembro)(body, connection_1.default, (err, result) => {
        if (err) {
            let sqlMessage = err.sqlMessage;
            let sql = err.sql;
            res.status(400).json({
                status: 400,
                sqlMessage,
                sql
            });
            return;
        }
        let affectedRows = result.affectedRows;
        if (affectedRows > 0) {
            res.json({ msg: 'Miembro ingresado correctamente!' });
        }
        else {
            res.status(404).json({
                status: '404',
                msg: `No se pudo insertar el miembro con el numero de tarjeta ${body.notarjeta}`
            });
        }
    });
};
exports.postMiembro = postMiembro;
const putMiembro = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    (0, miembrosOperations_1.updateMiembroId)(id, body, connection_1.default, (err, result) => {
        if (err) {
            let sqlMessage = err.sqlMessage;
            let sql = err.sql;
            res.status(400).json({
                status: 400,
                sqlMessage,
                sql
            });
            return;
        }
        let affectedRows = result.affectedRows;
        if (affectedRows > 0) {
            res.json({ msg: 'Miembro actualizado correctamente!' });
        }
        else {
            res.status(404).json({
                msg: `No se pudo realizar la actualizacion del miembro activo con el numero de tarjeta ${id}`
            });
        }
    });
};
exports.putMiembro = putMiembro;
const deleteMiembro = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    (0, miembrosOperations_1.estadoMiembroId)(body, id, connection_1.default, (err, result) => {
        if (err) {
            let sqlMessage = err.sqlMessage;
            let sql = err.sql;
            res.status(400).json({
                status: 400,
                sqlMessage,
                sql
            });
            return;
        }
        let affectedRows = result.affectedRows;
        if (affectedRows > 0) {
            res.json({ msg: 'Miembro actualizado correctamente!' });
        }
        else {
            res.status(404).json({
                msg: `No se pudo realizar la actualizacion del miembro activo con el numero de tarjeta ${id}`
            });
        }
    });
};
exports.deleteMiembro = deleteMiembro;
//# sourceMappingURL=miembrosRoutes.js.map