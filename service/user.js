const fs = require('fs')

fs.writeFileSync('./',JSON.stringify({users:['yun','Alex']}), (err) => {
    console.log( err);
});

fs.readFileSync('path/file.json', (err, data)=>{
  console.log(JSON.parse(data))

  // data 
})