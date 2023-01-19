const express = require('express');

const router = express.Router();

// CADA SERVIÇO TERÁ SUA ROTA PARA ADM - O QUE VAI LEVAR OS VERBOS DE DIÁLOGO COM O DB

// alunos router
const alunosRouter = require('./alunos');

router.use("/", alunosRouter);
// --------------------------------------------------------------------

// turmas router
const turmasRouter = require('./turmas');

router.use("/", turmasRouter);
// --------------------------------------------------------------------


// professores router
const professoresRouter = require('./professores');

router.use("/", professoresRouter);
// --------------------------------------------------------------------

// relatorioAluno router
const relatorioAlunoRouter = require('./relatorioAlunos');

router.use("/", relatorioAlunoRouter);
// --------------------------------------------------------------------

// calendario router
const calendarioRouter = require('./calendario');

router.use("/", calendarioRouter);
// --------------------------------------------------------------------


module.exports = router;