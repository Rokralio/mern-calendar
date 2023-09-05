const { Schema, model } = require('mongoose')

const EventSchema = Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  notes: {
    type: String,
  }
});

EventSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Evento', EventSchema );