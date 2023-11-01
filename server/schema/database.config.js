import mysql from 'mysql2'


let connectionInformation = mysql.createConnection({
    host:'localhost',
    user:'group3',
    password:'group3',
    database:'library'
})

export default connectionInformation