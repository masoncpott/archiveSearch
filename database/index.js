var mongoose = require('mongoose');
const config = require('../config.js');
mongoose.connect(config.CONNECTION);

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var artSchema = mongoose.Schema({
  links: {
    web: String
  },
  id: String,
  objectNumber: String,
  title: String,
  hasImage: Boolean,
  principalOrFirstMaker: String,
  longTitle: String,
  showImage: Boolean,
  permitDownload: Boolean,
  webImage: {
    width: Number,
    Height: Number,
    url: String
  },
  productionPlaces: Array
});

var Art = mongoose.model('Art', artSchema);

var selectAll = function(callback) {
  Art.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var save = function (incomingDataFromAPI) {
  //incomingDataFromAPI is an array of objects
  //this function takes the incoming data and saves it to the database, eliminating any duplicates
  const promises = incomingDataFromAPI.map(artwork => {
    const filter = {objectNumber: artwork.objectNumber};
    const update = artwork;
    Art.findOneAndUpdate(filter, update, {upsert: true}).exec();
  })

  return Promise.all(promises)
};

var sortAndReturn = function (artistName) {
  //this function should get all the artwork by one artist and return all of them
  return Promise.resolve(Art.find({principalOrFirstMaker: artistName}));
};

var Return = function (artistName) {
  return new Promise((resolve, reject) => {
    Art.find({principalOrFirstMaker: artistName}, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
};

module.exports = {selectAll, save, sortAndReturn};