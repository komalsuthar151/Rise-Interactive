import React from "react";

function Article({ title, type }) {
  return (
    <div className="card-style-article">
      <div className="article"></div>
      <div className="container" data-container-type={type}></div>
      <hr type={type} />
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default Article;
