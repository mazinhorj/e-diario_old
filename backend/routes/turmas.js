const express = require('express');

const router = express.Router();

const turmaController = require('../controllers/turmasController'); 


router.route("/turmas").post((req, res) => turmaController.create(req, res));

router.route("/turmas").get((req, res) => turmaController.getAll(req, res));

router.route("/turmas/turma").get((req, res) => turmaController.getMany(req, res));

router.route("/turmas/:id").delete((req, res) => turmaController.delete(req, res));

router.route("/turmas/:id").put((req, res) => turmaController.update(req, res));


module.exports = router;