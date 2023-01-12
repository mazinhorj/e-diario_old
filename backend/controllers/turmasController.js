const { Turma: TurmaModel } = require('../models/Turma');

const turmaController = {

  create: async (req, res) => {
    try {
      const turma = {
        escola: req.body.escola,
        professor: req.body.professor,
        disciplina: req.body.disciplina,
        serie: req.body.serie,
        turma: req.body.turma,
        alunos: req.body.alunos,
      }; 

      const response = await TurmaModel.create(turma);
      res.status(201).json({ response, msg: "Parabéns! Turma cadastrada com sucesso." });

    } catch (error) {
      console.log(error);
    };
  },

  update: async (req, res) => {
    const id = req.params.id
    const turma = {
      escola: req.body.escola,
      professor: req.body.professor,
      disciplina: req.body.disciplina,
      serie: req.body.serie,
      turma: req.body.turma,
      alunos: req.body.alunos,
    };
    
    const updatedTurma = await TurmaModel.findByIdAndUpdate(id, turma);
    if (!updatedTurma) {
      res.status(404).json({ msg: "Não achei o que você procura para editar" });
      return;
    };
    res.status(200).json({ turma, msg: "Atualizada com sucesso" });
  }

};

module.exports = turmaController;