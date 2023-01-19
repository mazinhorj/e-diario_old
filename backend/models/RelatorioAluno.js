const mongoose = require('mongoose');

const { Schema } = mongoose;

const { alunoSchema } = require('./Aluno');
const { professorSchema } = require('./Professor');  

const relatorioAlunoSchema = new Schema({
  // info do aluno
  aluno: {
    type: [alunoSchema],
    required: true
  },
  // info do prof
  professor: {
    type: [professorSchema],
    required: true
  },
  // informar o bimestre é obrigatório - select no front???
  bimestre: {
    type: String,
    required: true
  },
  // texto do relatorio
  relatorio: {
    type: String,
    required: true
  },
},
  { timestamps: true }
);

const RelatorioAluno = mongoose.model('RelatorioAluno', relatorioAlunoSchema);

module.exports = {
  RelatorioAluno,
  relatorioAlunoSchema,
}