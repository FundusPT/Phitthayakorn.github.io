const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('D:/Work/HTML/640911048_Hw1_HTML/Code/')));

app.get('/', function(req,res){
    res.sendFile(path.join('D:/Work/HTML/640911048_Hw1_HTML/Code/index.html'))
});
app.get('/index', function(req,res){
    res.sendFile(path.join('D:/Work/HTML/640911048_Hw1_HTML/Code/index.html'))
});
app.get('/Web2', function(req,res){
    res.sendFile(path.join('D:/Work/HTML/640911048_Hw1_HTML/Code/Web2.html'))
});
app.get('/Web2_2', function(req,res){
    res.sendFile(path.join('D:/Work/HTML/640911048_Hw1_HTML/Code/Web2_2.html'))
});
app.get('/Web3', function(req,res){
    res.sendFile(path.join('D:/Work/HTML/640911048_Hw1_HTML/Code/Web3.html'))
});
app.get('/Web4', function(req,res){
    res.sendFile(path.join('D:/Work/HTML/640911048_Hw1_HTML/Code/Web4.html'))
});
app.listen(3000, function(){
    console.log('Server listening on port http://localhost:3000/')
});