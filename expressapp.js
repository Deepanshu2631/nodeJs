const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/a', (req, res) => {
    res.send('Hello About')
  })
  app.get('/b', (req, res) => {
    res.send('Hello Boss')
  })
  app.get('/c', (req, res) => {
    res.send('Hello Chutiye')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
