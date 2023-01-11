const mongoose = require('mongoose');

const { Schema } = mongoose;

const { alunoSchema } = require('./Aluno');
const { professorSchema } = require('./Professor');

const turmaSchema = new Schema({
  // precisa ser igual aluno/professor
  escola: {
    type: String,
    required: true
  },
  // precisa ser igual aluno/professor
  turma: {
    type: String,
    required: true
  },
  professor: {
    type: [professorSchema],
    required: true
  },
  // vem do prof
  disciplina: {
    type: String,
    required: true
  },
  // vem do aluno
  serie: {
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