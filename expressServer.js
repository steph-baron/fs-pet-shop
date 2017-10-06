var express = require('express');
var app = express();
var fs = require('fs');

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

app.listen(3000);
