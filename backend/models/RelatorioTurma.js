const mongoose = require('mongoose');

const { Schema } = mongoose;

const { turmaSchema } = require('./Turma');
const { professorSchema } = require('./Professor');

const relatorioTurmaSchema = new Schema({
  // info da turma
  turma: {
    type: [turmaSchema],
    required: true
  },
  // info do prof
  professor: {
    type: [professorSchema],
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

const RelatorioTurma = mongoose.model('RelatorioTurma', relatorioTurmaSchema);

module.exports = {
  RelatorioTurma,
  relatorioTurmaSchema,
}