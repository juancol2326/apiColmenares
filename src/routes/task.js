import express from 'express'

const taskRouter = express.Router()

taskRouter.get('/getAll', (req, res) => {
    res.send('Here you will se all tasks')
})

taskRouter.get('/getOne/:id', (req, res) => {
    const id = req.params.id
    res.send('The task you are watching is the ' + id)
})

export default taskRouter