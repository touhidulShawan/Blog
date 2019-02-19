import React from "react";
import BlogPost from "./BlogPost";
import "./App.css";

const app = () => {
  return (
    <div className="ui container App">
      <div className="ui cards Card">
        <BlogPost />
      </div>
    </div>
  );
};

export default app;
