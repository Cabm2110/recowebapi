import mysql from 'mysql';

export function readMiembros(pool: mysql.Pool, callback : any){

    pool.getConnection( function( err, connection){
        connection.query("select * from miembros", function(err, result){
            callback(err, result);
        });
        connection.release();
    });

    // pool.query("select * from miembros", function(err, result){
    //     callback(err, result);
    // });
    // pool.end();
}

export function readMiembroId(notarjeta: string, pool: mysql.Pool, callback : any){

    pool.getConnection( function( err, connection){
        connection.query("select * from miembros where notarjeta = ?", notarjeta, function(err, result){
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


export function updateMiembroId(notarjeta: string, body: any, pool: mysql.Pool, callback: any){

    let updateQuery = "update miembros set nombre = ?, dpi = ?, telefono = ?, direccion = ?, correo = ? where notarjeta = ?";
    let query = mysql.format(updateQuery, [body.nombre, body.dpi, body.telefono, body.direccion, body.correo, notarjeta ]);

    pool.getConnection( function (err, connection) {
        connection.query(query, function(err, result){
            callback(err, result);
        });
        connection.release();
    });


    // db.query(query, function(err, result){
    //     callback(err, result);
    // });
    // db.end();
}


export function insertMiembro(body: any, pool: mysql.Pool, callback: any){

    let insertQuery = "insert into miembros ( notarjeta, nombre, dpi, telefono, direccion, correo, fechaingreso, estado) values ( ?,?,?,?,?,?,?,? )";
    let values = [body.notarjeta, body.nombre, body.dpi, body.telefono, body.direccion, body.correo, body.fechaingreso, body.estado ];

    pool.getConnection( function (err, connection) {
        connection.query(insertQuery, values, function(err, result){
            callback(err, result);
        });
        connection.release();
    });
}

export function estadoMiembroId(body: any, notarjeta: string, pool: mysql.Pool, callback: any){

    let updateQuery = "update miembros set estado = ? where notarjeta = ?";
    let values = [body.estado, notarjeta];

    pool.getConnection( function (err, connection) {
        connection.query(updateQuery, values, function(err, result){
            callback(err, result);
        });
        connection.release();
    });

    // pool.query( query, function(err, result) {
    //     callback(err, result );
    // } );
    // pool.end();
}