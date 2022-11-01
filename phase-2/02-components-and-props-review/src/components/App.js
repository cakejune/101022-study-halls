import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import ArticleList from "./ArticleList"

console.log("blogData", blogData);

function App() {
  return (
    <div className="App">

      <Header 
        title={ blogData.name } 
        views={ 6 } 
        foods={ ["pineapple", "pizza", "pineapple pizza"] } 
      />

      <ArticleList articles={blogData.posts} colour="green" />

    </div>
  );
}

export default App;
