const mongoose = require('mongoose');

const { Schema } = mongoose;

const alunoSchema = new Schema({
  // busca no ieducar
  ref_cod_aluno: {
    type: String,
    required: true
  },
  // nome do aluno
  aluno: {
    type: String,
    required: true
  },
  nascimento: {
    type: String,
    required: true
  },
  // data de enturmação
  data_cadastro: {
    type: String,
    required: true
  },
  // entrada no escola
  data_matricula: {
    type: String,
    required: true
  },
  // etapa em que está o aluno atualmente
  serie: {
    type: String,
    required: true
  },
  // opções da situação do aluno: MATR / ABAND / TRANSF / PROMOVIDO / RETIDO / PROM c. PP / OBITO
  resultado: {
    type: String,
    required: true
  },
  // turma atual
  turma: {
    type: String,
    required: true
  },
  // nome da escola
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