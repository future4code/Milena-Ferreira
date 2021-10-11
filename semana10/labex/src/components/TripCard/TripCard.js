import React from "react";

function TripCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.duration}</p>
      <p>{props.planet}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default TripCard;
