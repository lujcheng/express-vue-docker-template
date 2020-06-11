const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static(`${__dirname}/dist`)) 

app.engine('.html', require('ejs').renderFile)

app.set('views', `${__dirname}/dist`)

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
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