import { Request, Response } from 'express'
import { readMiembros, readMiembroId, updateMiembroId, insertMiembro, estadoMiembroId } from '../db/miembrosOperations';
import db from '../db/connection';
import mysql from 'mysql';


export const getMiembros = (req: Request, res: Response) => {

    readMiembros(db, ( result: any) => {
        if(Object.entries(result).length != 0){
            res.json({ result });
        }
        else{
            res.status(400).json({
                status: 400,
                msg: ' No se encontraron miembros activos!',
            })
        }
    });
}

export const getMiembro = (req: Request, res: Response) => {

    const { id } = req.params;

    readMiembroId(id, db, (result: any) => {
        if(Object.entries(result).length != 0){
            res.json({ result });
        }
        else{
            res.status(400).json({
                status: 400,
                msg: `No se encontro miembro activo con el número de tarjeta ${ id }`,
            })
        }
    })
}

export const postMiembro = (req: Request, res: Response) => {

    const { body } = req;

    insertMiembro(body, db, (err: any, result: any) => {

        if(err){
            let sqlMessage = err.sqlMessage;
            let sql = err.sql;

            res.status(400).json({ 
                status: 400,
                sqlMessage,
                sql
            });
            return
        } 
       
        let affectedRows = result.affectedRows;

        if(affectedRows > 0){
            res.json({ msg: 'Miembro ingresado correctamente!' });
        }else{
            res.status(404).json({
                status: '404',
                msg: `No se pudo insertar el miembro con el numero de tarjeta ${ body.notarjeta }`
            });
        }
    });
}

export const putMiembro = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    updateMiembroId(id, body, db, (err: any, result: any) => {

        if(err){
            let sqlMessage = err.sqlMessage;
            let sql = err.sql;

            res.status(400).json({ 
                status: 400,
                sqlMessage,
                sql
            });
            return
        } 

        let affectedRows = result.affectedRows;

        if(affectedRows > 0){
            res.json({ msg: 'Miembro actualizado correctamente!' });
        }else{
            res.status(404).json({
                msg: `No se pudo realizar la actualizacion del miembro activo con el numero de tarjeta ${ id }`
            });
        }

    });

}

export const deleteMiembro = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body} = req;

    estadoMiembroId(body, id, db, (err: any, result: any) => {

        if(err){
            let sqlMessage = err.sqlMessage;
            let sql = err.sql;

            res.status(400).json({ 
                status: 400,
                sqlMessage,
                sql
            });
            return
        } 

       
        let affectedRows = result.affectedRows;

        if(affectedRows > 0){
            res.json({ msg: 'Miembro actualizado correctamente!' });
        }else{
            res.status(404).json({
                msg: `No se pudo realizar la actualizacion del miembro activo con el numero de tarjeta ${ id }`
            });
        }
        
    });
}