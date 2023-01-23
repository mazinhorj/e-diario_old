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
      res.status(201).json({ response, msg: "Aluno cadastrado com sucesso!" });

    } catch (error) {
      console.log(error);
    };
  },

  getMany: async (req, res) => {
    try {
      // id => URL === GET
      const turma = "403"; // variavel da turma 
      const escola = "E M Visconde de Itaboraí"; // variavel da escola
      const aluno = await AlunoModel.find({turma: turma, fantasia: escola});
      if (!aluno) {
        res.status(404).json({ msg: "Não achei o que você procura" });
        return;
      };
      res.json({ aluno });
    } catch (error) {
      console.log(`Xiiii... Tem certeza: ${error}`)
    };
  },

  // APENAS RESGATA O ID SOLICITADO
  get: async (req, res) => {
    try {
      // id => URL === GET
      const id = req.params.id;
      const aluno = await AlunoModel.findById(id);
      if (!aluno) {
        res.status(404).json({ msg: "Não achei o que você procura" });
        return;
      };
      res.json({ aluno });
    } catch (error) {
      console.log(`Xiiii... Tem certeza: ${error}`)
    };
  },

  // TRAZ TODOS OS ALUNOS DO BANCO! - FAZER FILTRAGENS!!!
  getAll: async (req, res) => {
    try {
      const alunos = await AlunoModel.find();
      res.json(alunos);
    } catch (error) {
      console.log(`Xiiii... Não sei de nada: ${error}`)
    };
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id
      const aluno = await AlunoModel.findById(id);
      if (!aluno) {
        res.status(404).json({ msg: "Não achei o estudante que você procura para deletar" });
        return;
      };
      const deleteAluno = await AlunoModel.findByIdAndDelete(id);
      res.status(200).json({ deleteAluno, msg: "Estudante excluído com sucesso" });
    } catch (error) {
      console.log(`Xiiii... Não apagou: ${error}`)
    };
  },

  update: async (req, res) => {
    const id = req.params.id
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
    
    const updatedAluno = await AlunoModel.findByIdAndUpdate(id, aluno);
    if (!updatedAluno) {
      res.status(404).json({ msg: "Não achei o estudante que você procura para editar" });
      return;
    };
    res.status(200).json({ aluno, msg: "Estudante atualizado com sucesso." });
  }
};



module.exports = alunoController;