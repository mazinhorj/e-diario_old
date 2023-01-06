const { Aluno: AlunoModel } = require('../models/Aluno');

const alunoController = {

  create: async (req, res) => {
    try {
      const aluno = {
        ref_cod_aluno: req.body.ref_cod_aluno,
        aluno: req.body.aluno,
        nascimento: req.body.nascimento,
        data_cadastro: req.body.data_cadastro,
        data_matricula: req.body.data_matricula,
        serie: req.body.serie,
        resultado: req.body.resultado,
        turma: req.body.turma,
        fantasia: req.body.fantasia,
      };

      const response = await AlunoModel.create(aluno);
      res.status(201).json({ response, msg: "Parabéns! Aluno cadastrado com sucesso." });

    } catch (error) {
      console.log(error);
    };
  },

  getMany: async (req, res) => {
    try {
      // id => URL === GET
      const turma = "303";
      const escola = "CIEP Municipalizado 015 - Henrique de Souza Filho Henfil";
      const aluno = await AlunoModel.find({turma: turma, fantasia: escola});
      if (!aluno) {
        res.status(404).json({ msg: "Não achei o que você procura" });
        return;
      };
      res.json({ aluno, msg: "Achei o que vc queria!" });
    } catch (error) {
      console.log(`Xiiii... Tem certeza: ${error}`)
    };
  },

  get: async (req, res) => {
    try {
      // id => URL === GET
      const id = req.params.id;
      const aluno = await AlunoModel.findById(id);
      if (!aluno) {
        res.status(404).json({ msg: "Não achei o que você procura" });
        return;
      };
      res.json({ aluno, msg: "Achei o que vc queria!" });
    } catch (error) {
      console.log(`Xiiii... Tem certeza: ${error}`)
    };
  },

  getAll: async (req, res) => {
    try {
      const alunos = await AlunoModel.find();
      res.json(alunos);
    } catch (error) {
      console.log(`Xiiii... Não sei de nada: ${error}`)
    };
  },

  

};

module.exports = alunoController;