const mongoose = require('mongoose');

const { Schema } = mongoose;

const professorSchema = new Schema({
  // busca no ieducar
  matricula: {
    type: String,
    required: true
  },
  // codigo da escola
  ref_cod_escola: {
    type: String,
    required: true
  },
  // turma de atuação
  nm_turma: {
    type: String,
    required: false
  },
  // tempos de aula ???
  periodo: {
    type: String,
    required: true
  },
  // nome da escola
  fantasia: {
    type: String,
    required: true
  },
  // nome professor/a
  nome: {
    type: String,
    required: true
  },
  // 
  hora_inicial: {
    type: String,
    required: true
  },
  hora_final: {
    type: String,
    required: true
  },
  // como será para P2???
  disciplina: {
    type: String,
    required: true
  },
  // nome da escola
  funcao: {
    type: String,
    required: true
  }, // 1º / 2º / 3º / Noturno
  turno: {
    type: String,
    required: true
  },
},
  { timestamps: true }
);

const Professor = mongoose.model('Professor', professorSchema);

module.exports = {
  Professor,
  professorSchema,
}