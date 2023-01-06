const mongoose = require('mongoose');

const { Schema } = mongoose;

const { alunoSchema } = require('./Aluno');

const turmaSchema = new Schema({
  escola: {
    type: String,
    required: true
  },
  professor: {
    type: String,
    required: true
  },
  disciplina: {
    type: String,
    required: true
  },
  serie: {
    type: String,
    required: true
  },
  turma: {
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