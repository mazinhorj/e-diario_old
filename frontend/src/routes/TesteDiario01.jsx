import React from 'react';

import eDiarioFetch from '../axios/config';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import './TesteDiario01.css'



const TesteDiario01 = () => {
  const { id } = useParams();
  const [professor, setProfessor] = useState();
  const [aluno, setAluno] = useState();

  useEffect(() => {
    const loadCabecalho = async () => {
      const res = await eDiarioFetch.get(`/professores/${id}`);
      setProfessor(res.data);
    };
    loadCabecalho();
  }, []);

  useEffect(() => {
    const loadAlunos = async () => {
      const res = await eDiarioFetch.get('/alunos/turma');
      setAluno(res.data);
    };
    loadAlunos()
  }, [])

  if (!professor) return <p>Carregando turma...</p>;
  if (!aluno) return <p>Carregando alunos...</p>;
  console.log(professor);
  console.log(aluno);


  return (
    <div>
      {/* <ul>
        <li><h2>Escola: {professor.professor.fantasia}</h2></li>
        <li>Ano: 2022</li>
        <li><strong>Professor: {professor.professor.nome}</strong></li>
        <li>Matrícula: {professor.professor.matricula}</li>
        <li>Disciplina: {professor.professor.disciplina}</li>
        <li><strong>Turma: {professor.professor.nm_turma}</strong> </li>
        <li>Turno: {professor.professor.turno}</li>
      </ul>
      <h3>Alunos:</h3>
      <ul>
        {aluno.aluno.map((aluno) => (
          <li>{aluno.aluno}</li>
        ))}
      </ul> */}

      {/* simulação com tabela */}
      <h1>Frequência Semanal</h1>
      <div id="frequencia">
        <table>
          <thead>
            <tr>
              <th colSpan="8">Escola: {professor.professor.fantasia}</th>
              <th colSpan="3">Ano: 2022</th>
            </tr>
            <tr>
              <th>Turma</th>
              <th>Professor</th>
              <th>Disciplina</th>
              <th>Turno</th>
              <th colSpan="7">
                <a href="./lacamentos_btns.html"><button>Voltar</button></a>
              </th>
            </tr>
            <tr>
              <td>{professor.professor.nm_turma}</td>
              <td>{professor.professor.nome} ({professor.professor.matricula})</td>
              <td>{professor.professor.disciplina}</td>
              <td>{professor.professor.turno}</td>
              <td colSpan="7">
                <a href="#conteudo"><button>Lançar conteúdo</button></a>
              </td>
            </tr>
            <tr>
              <th colSpan="6">Alunos</th>
              <th colSpan="1">{"<< "}  </th>
              <th colSpan="3"> Frequência </th>
              <th colSpan="1">  {" >>"}</th>
            </tr>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Nascimento</th>
              <th>Matrícula</th>
              <th>Data de Matrícula</th>
              <th>Situação</th>
              <th>Dia 01</th>
              <th>Dia 02</th>
              <th>Dia 03</th>
              <th>Dia 04</th>
              <th>Dia 05</th>
            </tr>
          </thead>
          <tbody>
            {aluno.aluno.map((aluno) => (
              <tr key={aluno._id}>
                <td>{aluno.ref_cod_aluno}</td>
                <td>{aluno.aluno}</td>
                <td>{aluno.nascimento}</td>
                <td>???</td>
                <td>{aluno.data_matricula}</td>
                <td>{aluno.resultado}</td>
                <td>
                  <fieldset>
                    P
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_01}_freq"
                      value="presente"
                      id="${cod_aluno}_presente"
                    />
                  </fieldset>
                  <fieldset>
                    F
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_01}_freq"
                      value="ausente"
                      id="${cod_aluno}_ausente"
                    />
                  </fieldset>
                  <fieldset>
                    J
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_01}_freq"
                      value="justificada"
                      id="${cod_aluno}_justificada"
                    />
                  </fieldset>
                </td>
                <td>
                  <fieldset>
                    P
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_02}_freq"
                      value="presente"
                      id="${cod_aluno}_presente"
                    />
                  </fieldset>
                  <fieldset>
                    F
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_02}_freq"
                      value="ausente"
                      id="${cod_aluno}_ausente"
                    />
                  </fieldset>
                  <fieldset>
                    J
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_02}_freq"
                      value="justificada"
                      id="${cod_aluno}_justificada"
                    />
                  </fieldset>
                </td>
                <td>
                  <fieldset>
                    P
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_03}_freq"
                      value="presente"
                      id="${cod_aluno}_presente"
                    />
                  </fieldset>
                  <fieldset>
                    F
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_03}_freq"
                      value="ausente"
                      id="${cod_aluno}_ausente"
                    />
                  </fieldset>
                  <fieldset>
                    J
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_03}_freq"
                      value="justificada"
                      id="${cod_aluno}_justificada"
                    />
                  </fieldset>
                </td>
                <td>
                  <fieldset>
                    P
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_04}_freq"
                      value="presente"
                      id="${cod_aluno}_presente"
                    />
                  </fieldset>
                  <fieldset>
                    F
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_04}_freq"
                      value="ausente"
                      id="${cod_aluno}_ausente"
                    />
                  </fieldset>
                  <fieldset>
                    J
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_04}_freq"
                      value="justificada"
                      id="${cod_aluno}_justificada"
                    />
                  </fieldset>
                </td>
                <td>
                  <fieldset>
                    P
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_05}_freq"
                      value="presente"
                      id="${cod_aluno}_presente"
                    />
                  </fieldset>
                  <fieldset>
                    F
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_05}_freq"
                      value="ausente"
                      id="${cod_aluno}_ausente"
                    />
                  </fieldset>
                  <fieldset>
                    J
                    <input
                      type="radio"
                      name="${cod_aluno_01}_${dia_05}_freq"
                      value="justificada"
                      id="${cod_aluno}_justificada"
                    />
                  </fieldset>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default TesteDiario01