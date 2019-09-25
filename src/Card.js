import React from "react";
import tachyons from "tachyons";

const Card = props => {
  const { name, email, id } = props;
  return (
    <div className="tc bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?set=set4`} alt="cat" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
