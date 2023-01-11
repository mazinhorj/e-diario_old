const express = require('express');

const router = express.Router();

const professorController = require('../controllers/professoresController');


router.route("/professores").post((req, res) => professorController.create(req, res));


router.route("/professores").get((req, res) => professorController.getAll(req, res));

router.route("/professores/turmas").get((req, res) => professorController.getMany(req, res));

router.route("/professores/:id").get((req, res) => professorController.getOne(req, res));

router.route("/professores/:id").delete((req, res) => professorController.delete(req, res));

router.route("/professores/:id").put((req, res) => professorController.update(req, res));


module.exports = router;