/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Ativo = () => {
  const [ativo, setAtivo] = useState(false);
  const [contador, setContador] = useState(1);
  const [item, setItem] = useState([]);

  function handleClick() {
    setContador(contador + 1);
    setItem([...item, contador]);
    setAtivo(!ativo);
  }

  return (
    <div>
      <button onClick={handleClick}>{ativo ? "Ativo" : "inativo"}</button>
      {item.map((a) => {
        return <li>{a}</li>;
      })}
    </div>
  );
};
//export default Ativo
const api = "https://ranekapi.origamid.dev/json/api/produto";
const ProdutosHooks = () => {
  useEffect(async () => {
    const result = await fetch(api);
    const data = await result.json();
    console.log(data);
  });
  return <div>jj</div>;
};

export default ProdutosHooks;
