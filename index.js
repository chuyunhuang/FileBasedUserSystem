const express = require('express')

let app = express()

const port = 6500

app.get('/', (req, res)=>{
  res.send('Testing')
});






app.listen(port, ()=>{
  console.log(`server is listening at ${port}`)
})
