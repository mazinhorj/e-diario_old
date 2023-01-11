const mongoose = require('mongoose');

const { Schema } = mongoose;

const { diaMesSchema } = require('./DiaMes');


const mesSchema = new Schema({
  dia: {
    type: [diaMesSchema],
    required: true
  },
},
  { timestamps: true }
);

const Mes = mongoose.model('Mes', mesSchema);

module.exports = {
  Mes,
  mesSchema,
}