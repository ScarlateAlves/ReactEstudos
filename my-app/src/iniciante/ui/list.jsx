import React from "react";

const List = ({ titulo, item }) => {
  console.log(item);
  return (
    <>
      <h3>{titulo}</h3>
      <ul>
        {item.map((ite) => {
          return <li>{ite}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
