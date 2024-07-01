const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('3') // change this string to ensure a new version deployed
})

let healthStatus = 200
app.get('/health', (req, res) => {
  res.status(healthStatus).send(healthStatus === 200 ? 'ok' : 'uhh')
})

app.get('/health_stop', (req, res) => {
  healthStatus = 500
  res.send('/health should now return 500')
})

app.get('/health_start', (req, res) => {
  healthStatus = 200
  res.send('/health should now return 200')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
