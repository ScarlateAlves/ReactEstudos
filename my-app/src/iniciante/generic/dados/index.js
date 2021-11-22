import { styles } from "ansi-colors";
import { black, red } from "chalk";
import React from "react";

const contaMario = {
  cliente: "Mario",
  Idade: "31",
  compras: [
    {
      nome: "note",
      preco: 300,
    },
    {
      nome: "note",
      preco: 100,
    },
    {
      nome: "note",
      preco: 400,
    },
  ],
  ativa: false,
};

const contaJoao = {
  cliente: "Mario",
  Idade: "31",
  compras: [
    {
      nome: "note",
      preco: 25000,
    },
  ],
  ativa: true,
};

function Dados() {
  const dados = contaJoao;

  const a = dados.compras.map((item) => item.preco).reduce((x, y) => x + y);

  return (
    <div>
      <h1>Dados</h1>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.Idade}</p>
      <p>Total gasto: {a}</p>
      <p>{dados.ativa ? "inativo" : "ativo"}</p>
      <p>{a > 800 ? "Voce esta gatando Muito" : "Continue"}</p>
      <p></p>
    </div>
  );
}
export default Dados;
