var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// READ all objects in array
app.get('/pets', function(req, res){
  fs.readFile('pets.json', "utf-8", function (err, data){
    if(err) {throw err};
    res.send(data);
  })
})

// READ individual objects in array
app.get('/pets/:id', function(req, res){
  fs.readFile('./pets.json', "utf-8", function (err, data){
    if (err) {
      throw err
    }
    var id = Number(parseInt(req.params.id));
    var petStuff = JSON.parse(data);
    // console.log(petStuff);
    res.send(petStuff[id])
  })
})

// CREATE
// app.post('/pets', function(req, res){
//   fs.readFile('/pets.json', function(err, data){
//     if(err) throw err;
//     console.log(data);
//   })
// })


// // UPDATE
// app.put('/pets/:id', function(req, res){
//   var index = req.params.id;
//
//   var pet = req.body;
//
//   pets[index] = pet;
//   res.send(pet);
// })

// PATCH



// // DESTROY / DELETE
// app.delete('/guests/:id', function(req, res){
//
// })

app.listen(3000, function(){
  console.log("Listening at port 3000...");
})
