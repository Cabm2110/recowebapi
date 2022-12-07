"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estadoMiembroId = exports.insertMiembro = exports.updateMiembroId = exports.readMiembroId = exports.readMiembros = void 0;
function readMiembros(db, callback) {
    db.query("select * from miembros", function (err, result) {
        callback(err, result);
    });
}
exports.readMiembros = readMiembros;
function readMiembroId(notarjeta, db, callback) {
    let query = "select * from miembros where notarjeta = ?";
    db.query(query, notarjeta, function (err, result) {
        callback(err, result);
    });
}
exports.readMiembroId = readMiembroId;
function updateMiembroId(notarjeta, body, db, callback) {
    let updateQuery = "update miembros set nombre = ?, dpi = ?, telefono = ?, direccion = ?, correo = ? where notarjeta = ?";
    let query = db.format(updateQuery, [body.nombre, body.dpi, body.telefono, body.direccion, body.correo, notarjeta]);
    db.query(query, function (err, result) {
        callback(err, result);
    });
}
exports.updateMiembroId = updateMiembroId;
function insertMiembro(body, db, callback) {
    let insertQuery = "insert into miembros ( notarjeta, nombre, dpi, telefono, direccion, correo, fechaingreso) values ( ? )";
    let values = [body.notarjeta, body.nombre, body.dpi, body.telefono, body.direccion, body.correo, body.fechaingreso];
    db.query(insertQuery, [values], function (err, result) {
        callback(err, result);
    });
}
exports.insertMiembro = insertMiembro;
function estadoMiembroId(body, notarjeta, db, callback) {
    let updateQuery = "update miembros set estado = ? where notarjeta = ?";
    let query = db.format(updateQuery, [body.estado, notarjeta]);
    db.query(query, function (err, result) {
        callback(err, result);
    });
}
exports.estadoMiembroId = estadoMiembroId;
//# sourceMappingURL=miembrosOperations.js.map