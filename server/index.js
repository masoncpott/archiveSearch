var express = require('express');
var bodyParser = require('body-parser');
const api = require('../helpers/getInfoFromAPI.js');
const axios = require('axios');

var db = require('../database');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.urlencoded());
app.use(express.json());

//CREATE A POST ROUTE
app.post('/items', function(req, res) {
  const inputText = req.body.data;
  return api.getInfoFromAPI(inputText)
    .then((results) => {
      db.save(results.data.artObjects)
    })
    .then(() => {
      return db.sortAndReturn(inputText)
    })
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log("ERROR IN SERVER: ", err))
  res.end();
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

