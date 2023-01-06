const express = require('express');

const router = express.Router();

// alunos router
const alunosRouter = require('./alunos');

router.use("/", alunosRouter);


// turmas router
const turmasRouter = require('./turmas');

router.use("/", turmasRouter);


module.exports = router;