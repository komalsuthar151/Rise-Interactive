import React from "react";

function Card({ title, type }) {
  return (
    <div className={`card-style-${type}`}>
      <div className={type}>
        <div className="feature">
          <i className="fa fa-star"></i>Featured
        </div>
      </div>
      <div className="container" data-container-type={type}></div>
      <hr type={type} />
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default Card;
