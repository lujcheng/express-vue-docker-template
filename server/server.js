const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

const parentDir = path.resolve(__dirname, '..')
app.use(express.static(`${parentDir}/dist`)) 

app.engine('.html', require('ejs').renderFile)

app.set('views', `${parentDir}/dist`)

app.get('/', (req, res) => {
  res.sendFile(`${parentDir}/dist/index.html`)
})

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
 
app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
 
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(port)
console.log('App running on port', port)