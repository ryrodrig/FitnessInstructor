import React from "react";

const Card = props => {
  const { picture, name, desc, timeOfDay } = props.cardDetail;
  return (
    <div className="card" style={{ flexDirection: "row" }}>
      <img
        className="card-img-top img-fluid"
        style={{ width: "30%", maxWidth: "100%", height: "auto" }}
        src={picture}
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
        <p className="card-text">Time: {timeOfDay}</p>
        <a href="/" className="card-link">
          Update
        </a>
        <a href="/" className="card-link">
          Delete
        </a>
      </div>
    </div>
  );
};

export default Card;
