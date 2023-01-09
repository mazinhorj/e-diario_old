const mongoose = require('mongoose');

const { Schema } = mongoose;

const avFinalSchema = new Schema({
  nota_anual: {
    type: String, // mudar para float - media dos 4 bimestres
    required: true
  },
  recuperacao_final: {
    type: String, // mudar para float 
    required: true
  },
  media_final: {
    type: String, // mudar para float - media entre nota_anual e recuperacao_final; se > 5 = aprovado
    required: true,
  },
},
  { timestamps: true }
);

const AvFinal = mongoose.model('AvFinal', avFinalSchema);

module.exports = {
  AvFinal,
  avFinalSchema,
}



nota_anual
""
recuperacao_final
""
media_final
""