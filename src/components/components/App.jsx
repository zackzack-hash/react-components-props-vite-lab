import React from "react";
import blogData from "../data/blog"; // Ensure this path is correct
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header name="Nomadic Life" />
      
      <div className="container">
        <About 
          image={blogData.image} 
          about={blogData.about} 
        />
        <ArticleList posts={blogData.posts} />
      </div>
    </div>
  );
}

export default App;