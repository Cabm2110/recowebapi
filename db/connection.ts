import mysql from 'mysql';
import dotenv from 'dotenv'

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

export default pool;