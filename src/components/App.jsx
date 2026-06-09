import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header
        name={blogData.name}
        image={blogData.image}
        about={blogData.about}
      />
      <aside>
        <About
          name={blogData.name}
          image={blogData.image}
          about={blogData.about}
        />
      </aside>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;