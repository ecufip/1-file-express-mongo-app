const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

// define new app
const app = express();
var db

app.use(bodyParser());

MongoClient.connect('mongodb://localhost:27017/test', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.get('/', function(req, res){
    db.collection('sample').find().toArray(function(err, results) {
        console.log(results)
        res.json(results)
    })
});

app.post('/', (req, res) => {
    db.collection('sample').save(req.body, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/')
    })
  })