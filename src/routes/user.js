import express from 'express'
import connection from '../database/connection.js'

const userRouter = express.Router()

userRouter.get('/getAll', (_req, res) => {
  connection.query('SELECT * FROM user', (err, rows) => {
    if (!err) {
      res.send(rows)
    } else {
      throw err
    }
  })
})

userRouter.get('/getOne/:id', (req, res) => {
  const id = req.params.id
  connection.query('SELECT * FROM user WHERE id=?', [id], (err, rows) => {
    if (!err) {
      res.send(rows[0])
    } else {
      throw err
    }
  })
})

userRouter.post('/createOne', (req, res) => {
  const body = req.body
  const sql = 'INSERT INTO user (nombre, apellido, email, password, telefono) VALUES (?,?,?,?,?)'

  connection.query(sql, [body.nombre, body.apellido, body.email, body.password, body.telefono], (err, rows) => {
    if (!err) {
      res.send('El usuario ha sido satisfactoriamente creado')
    } else {
      throw err
    }
  })
})

userRouter.put('/update/:id', (req, res) => {
  const body = req.body
  const id = req.params.id
  const sql = 'UPDATE user SET nombre=?, apellido=?, email=?, password=?, telefono=? WHERE id=?'

  connection.query(sql, [body.nombre, body.apellido, body.email, body.password, body.telefono, id], (err, rows) => {
    if (!err) {
      res.send('El usuario ha sido satisfactoriamente actualizado')
    } else {
      throw err
    }
  })
})

export default userRouter