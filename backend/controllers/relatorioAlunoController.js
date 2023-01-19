const { RelatorioAluno: RelatorioAlunoModel } = require('../models/RelatorioAluno');


const relatorioAlunoController = {
  create: async (req, res) => {
    try {
      const relatorioAluno = {
        aluno: req.body.aluno, // doc do aluno
        professor: req.body.professor, // doc do professor
        bimestre: req.body.bimestre, // select no front ou textarea especifico
        relatorio: req.body.relatorio, // textarea modal?
      };
      const response = await RelatorioAlunoModel.create(relatorio);
      res.status(201).json({response, msg: "Relatório gravado com sucesso!"})
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = relatorioAlunoController;