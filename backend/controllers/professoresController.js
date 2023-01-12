const { Professor: ProfessorModel } = require('../models/Professor');

const professorController = {

  create: async (req, res) => {
    try {
      const professor = {
        matricula: req.body.matricula,
        ref_cod_escola: req.body.ref_cod_escola,
        nm_turma: req.body.nm_turma,
        periodo: req.body.periodo,
        fantasia: req.body.fantasia,
        nome: req.body.nome,
        hora_inicial: req.body.hora_inicial,
        hora_final: req.body.hora_final,
        disciplina: req.body.disciplina,
        funcao: req.body.funcao,
        turno: req.body.turno,
      };

      const response = await ProfessorModel.create(professor);
      res.status(201).json({ response, msg: "Parabéns! Professor cadastrado com sucesso." });

    } catch (error) {
      console.log(error);
    };
  },

  // PROFESSORES DE UMA DETERMINADA TURMA DE DETERMINADA ESCOLA
  getMany: async (req, res) => {
    try {
      // id => URL === GET
      const nm_turma = "401"; // variavel da turma
      const escola = "Creche e Escola Municipal Bairro Tabuleiro"; // variavel da escola 
      const professor = await ProfessorModel.find({ nm_turma: nm_turma, fantasia: escola });
      if (!professor) {
        res.status(404).json({ msg: "Não achei o professor que você procura" });
        return;
      };
      res.json({ professor, msg: "Achei a turma/professor que vc queria!" });
    } catch (error) {
      console.log(`Xiiii... Tem certeza (PROF-TURMA): ${error}`)
    };
  },

  // APENAS RESGATA O ID SOLICITADO
  getOne: async (req, res) => {
    try {
      // id => URL === GET
      const id = req.params.id;
      const professor = await ProfessorModel.findById(id);
      if (!professor) {
        res.status(404).json({ msg: "Não achei o professor que você procura" });
        return;
      };
      res.json({ professor, msg: "Achei o que vc queria!" });
    } catch (error) {
      console.log(`Xiiii... Tem certeza (esse aqui): ${error}`)
    };
  },

  // TRAZ TODOS OS PROFESSORES DO BANCO! - FAZER FILTRAGENS!!!
  getAll: async (req, res) => {
    try {
      const professores = await ProfessorModel.find();
      res.json(professores);
    } catch (error) {
      console.log(`Xiiii... Não sei de nada: ${error}`)
    };
  },


};

module.exports = professorController;