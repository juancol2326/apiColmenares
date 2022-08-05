import express from 'express'
import taskRouter from './routes/task.js'

const app = express()

app.use(express.json())

app.use('/task', taskRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})