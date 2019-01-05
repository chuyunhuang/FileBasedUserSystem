const FileService = require('./service/admin')
const fs = require('fs')

const express = require('express')

let app = express()

const port = 6500

// Adding student to a class
app.get('/class/add', (req, res) => {
  // using NODEJS/FS to write file
  let className = req.query.class
  let {
    name,
    age,
    city,
    grade
  } = req.query
  let dataToWrite = {
    student: [{
      name,
      age,
      city,
      grade
    }]
  }
  fs.readFile(`./classes/${className}.json`, (err, data) => {
    let readData = JSON.parse(data)
    readData.student.push({
      name,
      age,
      city,
      grade
    }) //append the data

    fs.writeFile(`./classes/${className}.json`, JSON.stringify(readData), (err) => {

    })
  })

  res.send({
    added: {
      name: req.query.name,
      age: req.query.age,
      city: req.query.city,
      grade: req.query.grade
    },
    class: req.query.class
  })
});

app.get('/class/list', (req, res) => {
  let className = req.query.class

  FileService.fileToJSON(className, (err,data)=>{

    if(err){
      res.json({error: `Class ${className} doesn't exist`})
      return;
    }
    res.send(data)
  })
  
  // fs.readFile(`./classes/${className}.json`, (err, data) => {
  //   res.send(JSON.parse(data))
  // })
})

// List failing student
app.get('/class/listfailing', (req, res) => {

  let className = req.query.class


  fs.readFile(`./classes/${className}.json`, (err, data) => {
    let classList = JSON.parse(data) //object
    let student = classList.student //array
    let failingstudent = []
    for (let i = 0; i < student.length; i++) {
      if (student[i].grade < 50) {
        failingstudent.push(student[i])
      }
      res.send({
        student: failingstudent
      })
    }
  })
})




app.get('/class/listfromcity', (req, res) => {
  let className = req.query.class
  let cityName = req.query.city
  console.log(className)
  fs.readFile(`./classes/${className}.json`, (err, data) => {
    let classList = JSON.parse(data) //object
    let city = classList.student //array
    let fromCity = []

    for (let i = 0; i < city.length; i++) {
      if (city[i].city === cityName){
        fromCity.push(city[i])
      } 
    }
    res.send({student: fromCity})
  })
})




app.listen(port, () => {
  console.log(`server is listening at ${port}`)
})