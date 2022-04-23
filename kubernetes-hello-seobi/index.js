const express = require('express')
const os = require('os')

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  const helloMessage = `Hello Kubernetes ${os.hostname()}`
  console.log(helloMessage)
  res.send(helloMessage)
})

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})