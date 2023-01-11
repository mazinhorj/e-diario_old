const mongoose = require('mongoose');

const { Schema } = mongoose;

const diaLetivoSemAlunoSchema = new Schema({
  // COC
  sit_01: {
    type: String,
    required: true
  },
  // GE
  sit_02: {
    type: String,
    required: true
  },
  // Reunião
  sit_03: {
    type: String,
    required: true
  },
  // outros
  sit_04: {
    type: String,
    required: true
  },
},
  { timestamps: true }
);

const DiaLetivoSemAluno = mongoose.model('DiaLetivoSemAluno', diaLetivoSemAlunoSchema);

module.exports = {
  DiaLetivoSemAluno,
  diaLetivoSemAlunoSchema,
}