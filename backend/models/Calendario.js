const mongoose = require('mongoose');

const { Schema } = mongoose;

const { diaMes } = require('./DiaMes');

const diaMesCalendarioSchema = new Schema({
  ano: {
    type: Number,
    required: true
  },
  mes: {
    type: String,
    required: true
  },
  dia: {
    type: Number,
    required: true
  },
  tipo: {
    type: [diaMes],
    required: true
  }
});

const DiaMesCalendario = mongoose.model('DiaMesCalendario', diaMesCalendarioSchema);

module.exports = {
  DiaMesCalendario,
  diaMesCalendarioSchema,
}