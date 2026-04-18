const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: { type: String, required: true, index: true },
  releaseDate: { type: Number, min: 1900, max: 2100 },
  genre: {
    type: String,
    enum: ['Action','Adventure','Comedy','Drama','Fantasy','Horror','Mystery','Thriller','Western','Science Fiction'],
    required: true
  },
  actors: {
    type: [{
      actorName: String,
      characterName: String
    }],
    validate: {
      validator: function(a) { return a.length >= 3; },
      message: 'A movie must have at least three actors.'
    },
    required: true
  }
});

module.exports = mongoose.model('Movie', MovieSchema);
