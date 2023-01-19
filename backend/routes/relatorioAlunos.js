const express = require('express');

const router = express.Router();

const relatorioAlunoController = require('../controllers/relatorioAlunoController');


router.route("/relatorioAluno").post((req, res) => relatorioAlunoController.create(req, res));

// router.route("/relatorioAluno").get((req, res) => relatorioAlunoController.getAll(req, res));

// router.route("/relatorioAluno/turmas").get((req, res) => relatorioAlunoController.getMany(req, res));

// router.route("/relatorioAluno/:id").get((req, res) => relatorioAlunoController.getOne(req, res));

// router.route("/relatorioAluno/:id").delete((req, res) => relatorioAlunoController.delete(req, res));

// router.route("/relatorioAluno/:id").put((req, res) => relatorioAlunoController.update(req, res));


module.exports = router;