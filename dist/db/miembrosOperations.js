"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.estadoMiembroId = exports.insertMiembro = exports.updateMiembroId = exports.readMiembroId = exports.readMiembros = void 0;
const mysql_1 = __importDefault(require("mysql"));
function readMiembros(pool, callback) {
    pool.getConnection(function (err, connection) {
        connection.query("select * from miembros", function (err, result) {
            callback(err, result);
        });
        connection.release();
    });
    // pool.query("select * from miembros", function(err, result){
    //     callback(err, result);
    // });
    // pool.end();
}
exports.readMiembros = readMiembros;
function readMiembroId(notarjeta, pool, callback) {
    pool.getConnection(function (err, connection) {
        connection.query("select * from miembros where notarjeta = ?", notarjeta, function (err, result) {
            callback(err, result);
        });
        connection.release();
    });
    // let query = "select * from miembros where notarjeta = ?";
    // pool.query( query, notarjeta, function(err, result) {
    //     callback(err, result);
    // } );
    // pool.end();
}
exports.readMiembroId = readMiembroId;
function updateMiembroId(notarjeta, body, pool, callback) {
    let updateQuery = "update miembros set nombre = ?, dpi = ?, telefono = ?, direccion = ?, correo = ? where notarjeta = ?";
    let query = mysql_1.default.format(updateQuery, [body.nombre, body.dpi, body.telefono, body.direccion, body.correo, notarjeta]);
    pool.getConnection(function (err, connection) {
        connection.query(query, function (err, result) {
            callback(err, result);
        });
        connection.release();
    });
    // db.query(query, function(err, result){
    //     callback(err, result);
    // });
    // db.end();
}
exports.updateMiembroId = updateMiembroId;
function insertMiembro(body, pool, callback) {
    let insertQuery = "insert into miembros ( notarjeta, nombre, dpi, telefono, direccion, correo, fechaingreso, estado) values ( ?,?,?,?,?,?,?,? )";
    let values = [body.notarjeta, body.nombre, body.dpi, body.telefono, body.direccion, body.correo, body.fechaingreso, body.estado];
    pool.getConnection(function (err, connection) {
        connection.query(insertQuery, values, function (err, result) {
            callback(err, result);
        });
        connection.release();
    });
}
exports.insertMiembro = insertMiembro;
function estadoMiembroId(body, notarjeta, pool, callback) {
    let updateQuery = "update miembros set estado = ? where notarjeta = ?";
    let values = [body.estado, notarjeta];
    pool.getConnection(function (err, connection) {
        connection.query(updateQuery, values, function (err, result) {
            callback(err, result);
        });
        connection.release();
    });
    // pool.query( query, function(err, result) {
    //     callback(err, result );
    // } );
    // pool.end();
}
exports.estadoMiembroId = estadoMiembroId;
//# sourceMappingURL=miembrosOperations.js.map