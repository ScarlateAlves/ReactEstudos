import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";

const Form = () => {
  return (
    <div>
      <Input title="Nome" />
      <Input title="Email" />
      <Button name="Entrar" />
    </div>
  );
};

export default Form;
