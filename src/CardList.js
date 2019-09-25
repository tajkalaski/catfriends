import React from "react";

import Card from "./Card";

const CardList = ({ cats }) => {
  const CardArray = cats.map((user, i) => {
    return (
      <Card key={i} id={cats[i].id} name={cats[i].name} email={cats[i].email} />
    );
  });
  return <div>{CardArray}</div>;
};
export default CardList;
