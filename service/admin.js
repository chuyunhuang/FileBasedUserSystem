const fs = require('fs')

//define an empty object
const FileService = {};

//attaching function to this key
FileService.fileToJSON = (className, cb) =>{
const path = `./classes/${className}.json`;
//need a cb b/c the function is async
 fs.readFile(path, 'utf8', (err, data)=>{
  cb(err, data)
 })
}

module.exports = FileService;