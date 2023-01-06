const mongoose = require('mongoose');

const { Schema } = mongoose;

const alunoSchema = new Schema({
  ref_cod_aluno: {
    type: String,
    required: true
  },
  aluno: {
    type: String,
    required: true
  },
  nascimento: {
    type: String,
    required: true
  },
  data_cadastro: {
    type: String,
    required: true
  },
  data_matricula: {
    type: String,
    required: true
  },
  serie: {
    type: String,
    required: true
  },
  resultado: {
    type: String,
    required: true
  },
  turma: {
    type: String,
    required: true
  },
  fantasia: {
    type: String,
    required: true
  },
},
  { timestamps: true }
);

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = {
  Aluno,
  alunoSchema,
}