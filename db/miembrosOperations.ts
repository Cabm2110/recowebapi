import mysql from 'mysql';

export function readMiembros(db: mysql.Connection, callback : any){
    db.query("select * from miembros", function(err, result){
        if(err) throw err;
        callback(result);
    });
}

export function readMiembroId(notarjeta: string, db: mysql.Connection, callback : any){
    let query = "select * from miembros where notarjeta = ?";
    db.query( query, notarjeta, function(err, result) {
        if(err) throw err;
        callback(result);
    } );
}


export function updateMiembroId(notarjeta: string, body: any, db: mysql.Connection, callback: any){

    let updateQuery = "update miembros set nombre = ?, dpi = ?, telefono = ?, direccion = ?, correo = ? where notarjeta = ?";
    let query = db.format(updateQuery, [body.nombre, body.dpi, body.telefono, body.direccion, body.correo, notarjeta ]);

    db.query(query, function(err, result){
        callback(err, result);
    });
}


export function insertMiembro(body: any, db: mysql.Connection, callback: any){

    let insertQuery = "insert into miembros ( notarjeta, nombre, dpi, telefono, direccion, correo, fechaingreso) values ( ? )";
    let values = [body.notarjeta, body.nombre, body.dpi, body.telefono, body.direccion, body.correo, body.fechaingreso ];

    db.query(insertQuery, [values],  function(err, result){
        callback(err, result);
    });
}

export function estadoMiembroId(body: any, notarjeta: string, db: mysql.Connection, callback: any){

    let updateQuery = "update miembros set estado = ? where notarjeta = ?";
    let query = db.format(updateQuery, [body.estado, notarjeta]);

    db.query( query, function(err, result) {
        callback(err, result );
    } );
}








