const express = require('express')

const app = express()

const todos = []

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({
    todos
  })
})

app.post('/', (req, res) => {
  const { title, desc } = req.body;

  todos.push({
    title, desc
  })

  return res.json({
    msg: "Todos were created successfully !!"
  })
})

app.listen(3000)
