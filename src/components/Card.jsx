import React from "react";

function Card(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Residence: {props.residence}</p>
      <p>Telephone: {props.tel}</p>
    </div>
  );
}

export default Card;
