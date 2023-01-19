const mongoose = require('mongoose');

const { Schema } = mongoose;

const { professorSchema } = require('./Professor');
const { calendarioSchema } = require('./Calendario');

const conteudoSchema = new Schema({
  // nome da escola - doc prof?
  escola: {
    type: String,
    required: true
  },
  // turma - doc prof?
  turma: {
    type: String,
    required: true
  },
  // nome do professor - doc prof!
  professor: {
    type: [professorSchema],
    required: true
  },
  // disciplina - doc prof?
  disciplina: {
    type: String,
    required: true
  },
  dia: {
    type: [calendarioSchema],
    required: true
  },
  // conteudo
  conteudo: {
    type: String,
    required: true
  },
},
  { timestamps: true }
);

const Conteudo = mongoose.model('Conteudo', conteudoSchema);

module.exports = {
  Conteudo,
  conteudoSchema,
};