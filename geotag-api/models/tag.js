const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/mydb');

var TagSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true
  },
  desc: {
    type: String,
    index: true
  },
  lat: {
    type: Number,
    index: true
  },
  long: {
    type: Number,
    index: true
  },
  z: {
    type: Number,
    index: true
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true
  }
});

var Tag = mongoose.model('Tag', TagSchema);

module.exports = {
  Tag: Tag
}
