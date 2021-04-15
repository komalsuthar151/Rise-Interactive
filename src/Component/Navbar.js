import React from "react";

function Navbar() {
  function myFunction(e) {
    e.preventDefault();
    console.log("clicked");
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#logo">
          <div className="logo"></div>
        </a>
        <a href="#news">Health & Wellness</a>
        <a href="#contact">Sustainability</a>
        <a href="#about">Facts & Myths</a>
        <a href="#about">Life on the Farm</a>
        <a href="#about">Recipes</a>
        <a href="#" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
        <div className="search-bar">
          <i className="fa fa-search"></i>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
