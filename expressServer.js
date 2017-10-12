var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/pets', function (req, res){
  fs.readFile('pets.json', function(err, data){
    var pets = JSON.parse(data);
    var pet = req.body;
    pets.push(pet);
    res.send(pets);
  })
  // console.log(req.body.name);
  // res.send(req.body.name + req.body.age + req.body.kind);
})

app.get('/pets', function(req, res){
  fs.readFile('pets.json', 'utf8', function(err, data){
    if(err){
      throw err
    }
    res.send(data);
  })
})

app.get('/pets/:index', function(req,res){
  var petNum = req.params.index;
  fs.readFile('pets.json', 'utf8', function(err, data){
    if(err){
      throw err;
    }
    var pets = JSON.parse(data);
    res.send(pets[petNum]);
  })
})

app.listen(3000, function(){
  console.log('Listening at port 3000');
});
