const mongoose = require('mongoose');

const { Schema } = mongoose;

const avBimSchema = new Schema({
  av1: {
    type: String, // mudar para float
    required: true
  },
  av2: {
    type: String, // mudar para float
    required: true
  },
  av3: {
    type: String, // mudar para float
    required: true
  },
  av4: {
    type: String, // mudar para float
    required: true
  },
  nota_bim: {
    type: String, // mudar para float - somatorio das 4 avs ou media das 4
    required: true
  },
  recuperacao: {
    type: String, // mudar para float
    required: true,
  },
  nota_bim_final: {
    type: String, // mudar para float - media entre nota_bim e recuperacao
    required: true,
  },  
},
  { timestamps: true }
);

const AvBim = mongoose.model('AvBim', avBimSchema);

module.exports = {
  AvBim,
  avBimSchema,
}