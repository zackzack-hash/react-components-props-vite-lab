import PostCard from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;