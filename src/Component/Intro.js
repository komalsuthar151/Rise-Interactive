import React from "react";

function Intro() {
  return (
    <div className="intro">
      <h1>Undeniably Devoted to Dairy </h1>
      <p>
        Learn why dairy and dairy products are contributed to a well balenced
        diet. Lorem ipsum <br />
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt.
      </p>
      <h5>
        Learn More:
        <a href="#" className="learn-more">
          {" "}
          Podcast
        </a>
        <a href="#" className="learn-more">
          {" "}
          Stories
        </a>
      </h5>

      <hr />
    </div>
  );
}

export default Intro;
