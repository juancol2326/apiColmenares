import express from 'express'
import connection from '../database/connection.js'

const taskRouter = express.Router()

taskRouter.get('/getAll', (_req, res) => {
    connection.query('SELECT * FROM user', (err, rows) => {
        if (!err) {
            res.send(rows)
        } else {
            throw err
        }
    })
})

taskRouter.get('/getOne/:id', (req, res) => {
    const id = req.params.id
    res.send('The task you are watching is the ' + id)
})

export default taskRouter