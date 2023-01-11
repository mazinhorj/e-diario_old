const mongoose = require('mongoose');

const { Schema } = mongoose;

const conteudoSchema = new Schema({
  // nome da escola
  escola: {
    type: String,
    required: true
  },
  // turma
  turma: {
    type: String,
    required: true
  },
  // nome do professor
  professor: {
    type: String,
    required: true
  },
  // disciplina
  disciplina: {
    type: String,
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