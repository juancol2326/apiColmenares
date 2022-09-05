import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'manageTasks'
})

connection.connect((err) => {
    if (!err) {
        console.log('Connection succesfully')
    } else {
        throw err;
    }
})

export default connection