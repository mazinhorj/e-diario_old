const express = require('express');

const router = express.Router();

const calendarioController = require('../controllers/calendarioController');


router.route("/calendario").post((req, res) => calendarioController.create(req, res));

// router.route("/calendario").get((req, res) => calendarioController.getAll(req, res));

// router.route("/calendario/turmas").get((req, res) => calendarioController.getMany(req, res));

// router.route("/calendario/:id").get((req, res) => calendarioController.getOne(req, res));

// router.route("/calendario/:id").delete((req, res) => calendarioController.delete(req, res));

// router.route("/calendario/:id").put((req, res) => calendarioController.update(req, res));


module.exports = router;