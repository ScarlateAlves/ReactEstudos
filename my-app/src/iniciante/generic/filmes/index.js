import React from "react";

function Filmes() {
  const filmes = [
    { nome: "Filme1", ano: "2000" },
    { nome: "Filme2", ano: "2001" },
    { nome: "Filme3", ano: "2002" },
    { nome: "Filme4", ano: "2003" },
  ];
  return (
    <div>
      <h1>Filmes favoritos</h1>
      {filmes.map(({ nome, ano }) => (
        <p key={nome}>
          <strong>{nome}</strong> data de lançamento {ano}
        </p>
      ))}
    </div>
  );
}
export default Filmes;
