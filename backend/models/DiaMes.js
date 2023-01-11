const mongoose = require('mongoose');

const { Schema } = mongoose;

const { diaLetivoSchema } = require('./DiaLetivo');
const { diaLetivoSemAlunoSchema } = require('./DiaLetivoSemAluno');

const diaMesSchema = new Schema({
  // DNL - dia não letivo
  sit_01: {
    type: String,
    required: true
  },
  // Dia Letivo
  sit_02: {
    type: [diaLetivoSchema],
    required: true
  },
  // Dia Letivo Sem Aluno
  sit_03: {
    type: [diaLetivoSemAlunoSchema],
    required: true
  },
},
  { timestamps: true }
);

const DiaMes = mongoose.model('DiaMes', diaMesSchema);

module.exports = {
  DiaMes,
  diaMesSchema,
}