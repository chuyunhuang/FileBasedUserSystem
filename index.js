const adminService = require('./service/admin')
const fs = require('fs')

const express = require('express')

let app = express()

const port = 6500

// Adding student to a class
app.get('/class/add', (req, res)=>{
// creating file
  let className = req.query.class
  let dataToWrite = JSON.stringify(req.query)
  fs.writeFile(`./classes/${className}.json`, dataToWrite, (err)=>{

  })
  res.send({
    added: {name:req.query.name, age:req.query.age, city:req.query.city, grade: req.query.grade},
    class: req.query.class
  })
});

app.get('/class/list', (req, res)=>{
  let className =req.query.class
  
  fs.readFile(`./classes/${className}.json`, (err, data)=>{
    res.send(JSON.parse(data))
  })
})
// Listing student to a class

// List failing student

// List student from a city




app.listen(port, ()=>{
  console.log(`server is listening at ${port}`)
})
