import React from "react";
import Card from "./Card";
import Article from "./Article";

function Main() {
  return (
    <div>
      <div className="main">
        <div className="main-1">
          <Card
            title="Display of Devotion, Murals Dedicated to Dairy"
            type="video"
          />
          <Card
            title="Hear Stories of Dairy Devotion, Podcast"
            type="podcast"
          />
          <Article
            title="Sustainability Awards, Farms and Going Green"
            type="article"
          />
        </div>
        <div className="main-2">
          <Article
            title="Community Story products are contributed"
            type="article"
          />
          <Article
            title="Another story products are contributed"
            type="article"
          />
          <Article
            title="Different story products are contributed"
            type="article"
          />
          <Article
            title="Another story products are contributed"
            type="article"
          />
          <Article
            title="Another story products are contributed"
            type="article"
          />
          <Article
            title="Another story products are contributed"
            type="article"
          />
          <Article
            title="Another story products are contributed"
            type="article"
          />
          <Article
            title="Another story products are contributed"
            type="article"
          />
        </div>
      </div>
      <div className="btn">
        <button className="see-more"> See More </button>
      </div>
    </div>
  );
}

export default Main;
