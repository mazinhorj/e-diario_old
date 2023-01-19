const mongoose = require('mongoose');

const { Schema } = mongoose;

const { alunoSchema } = require('./Aluno');
const { professorSchema } = require('./Professor');

const turmaSchema = new Schema({
  // precisa ser igual aluno/professor 
  escola: { // vai vir do doc do prof & aluno
    type: String,
    required: true
  },
  // precisa ser igual aluno/professor
  turma: { // vai vir do doc do prof & aluno
    type: String,
    required: true
  },
  professor: {
    type: [professorSchema],
    required: true
  },
  // vem do prof
  disciplina: { // vai vir do doc do prof
    type: String,
    required: true
  },
  // vem do aluno
  serie: { // vai vir do doc do aluno
    type: String,
    required: true
  },
  alunos: {
    type: [alunoSchema],
    required: true
  },

},
  { timestamps: true }
);

const Turma = mongoose.model('Turma', turmaSchema);

module.exports = {
  Turma,
  turmaSchema,
}