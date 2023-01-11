const mongoose = require('mongoose');

const { Schema } = mongoose;

const diaLetivoSchema = new Schema({
  // presente
  sit_01: {
    type: String,
    required: true
  },
  // ausente
  sit_02: {
    type: String,
    required: true
  },
  // justificada
  sit_03: {
    type: String,
    required: true
  },
  // remoto
  sit_04: {
    type: String,
    required: true
  },
  // outros
  sit_05: {
    type: String,
    required: true
  },
},
  { timestamps: true }
);

const DiaLetivo = mongoose.model('DiaLetivo', diaLetivoSchema);

module.exports = {
  DiaLetivo,
  diaLetivoSchema,
}