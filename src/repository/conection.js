import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DB
})

console.log("Conexão com db feita")
export default con;