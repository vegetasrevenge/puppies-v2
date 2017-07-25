const express = require('express');
const chalk = require('chalk');

const app = express();

app.use(express.static('static-files'));

app.get('/', function(req, res){
  
});

app.listen(1699, function(){
  console.log('GET READY FOR PUPPIES!');
})
