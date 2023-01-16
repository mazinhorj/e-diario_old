const express = require('express');

const router = express.Router();

const alunoController = require('../controllers/alunosController');


router.route("/alunos").post((req, res) => alunoController.create(req, res)); 

router.route("/alunos").get((req, res) => alunoController.getAll(req, res));

router.route("/alunos/turma").get((req, res) => alunoController.getMany(req, res));

router.route("/alunos/:id").delete((req, res) => alunoController.delete(req, res));

router.route("/alunos/:id").put((req, res) => alunoController.update(req, res)); 


module.exports = router;