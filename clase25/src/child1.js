const express = require('express')
const { fork } = require('child_process')

const app = express()

app.get('/', (req, res) => {
  const child = fork('./src/operacionCompleja')
  child.send('Inicia el cálculo')

  child.on('message', result => {
    res.json({ message: result })
  })
})

app.get('/test', (req, res) => {
  res.json({ message: 'Probando' })
})

app.listen(3000, () => {
  console.log('3000')
})
