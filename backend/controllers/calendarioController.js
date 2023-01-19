const { Calendario: CalendarioModel } = require('../models/Calendario');

const calendarioController = {
  create: async (req, res) => {
    try {
      const calendario = {
        ano: req.body.ano,
        mes: req.body.mes,
        dia: req.body.dia,
        tipo: req.body.tipo,
      };
      const response = await CalendarioModel.create(calendario);
      res.status(201).json({ response, msg: "Dia inserido no calendário com sucesso." });
    } catch (error) {
      console.log(error);
    };
  },
};

module.exports = calendarioController;