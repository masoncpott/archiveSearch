var express = require('express');
var bodyParser = require('body-parser');
const { getInfoFromAPI } = require('../helpers/getInfoFromAPI.js');
const axios = require('axios');

var db = require('../database');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.urlencoded());
app.use(express.json());

app.post('/items', async (req, res) => {
  const { data } = req.body;
  try {
    const response = await getInfoFromAPI(data);
    await db.save(response.artObjects);
    const results = await db.sortAndReturn(data);
    res.status(200).send(results);
  } catch (e) {
    console.log('ERROR IN SERVER: ', e);
    res.sendStatus(500);
  }
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

