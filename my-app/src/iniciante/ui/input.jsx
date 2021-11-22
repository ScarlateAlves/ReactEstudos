import React from "react";

const Input = ({ title }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <label>{title}</label>
      <input type="text" />
    </div>
  );
};
export default Input;
