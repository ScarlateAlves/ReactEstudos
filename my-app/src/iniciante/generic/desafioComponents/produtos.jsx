import React from "react";
import Titulo from "../../ui/titulo";
import List from "../../ui/list";

const Produtos = () => {
  const arry = [
    { produto: "Noteebook", item: ["16gb ram", "512GB"] },
    { produto: "sMART", item: ["6gb ram", "128GB"] },
  ];
  return (
    <div>
      <Titulo name="Produtos" />
      {arry.map((a) => {
        return <List titulo={a.produto} item={a.item}></List>;
      })}
    </div>
  );
};

export default Produtos;
