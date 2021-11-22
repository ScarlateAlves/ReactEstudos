import React from "react";
import Dados from "./iniciante/generic/dados";
import Filmes from "./iniciante/generic/filmes";
import Form from "./iniciante/form";
import Home from "./iniciante/generic/desafioComponents/home";
import Produtos from "./iniciante/generic/desafioComponents/produtos";
import Header from "./iniciante/header";
import ProdutosHooks from "./hooks/useState";

function App() {
  return (
    <div>
      <Header />
      <Dados   />
      <Filmes   />
      <Form   />
      <Home/>
      <Produtos />
      <ProdutosHooks />
    </div>
  );
}
export default App;
