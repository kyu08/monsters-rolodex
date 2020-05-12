import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  const {monster} = props;
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}?set=set2&size=160x180`}
      />
      <p>{monster.name}</p>
      <p>{monster.email}</p>
    </div>);
}