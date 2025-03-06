import { useEffect, useState } from "react";
import "./App.css";
import PostCard from "./components/PostCard";

function App() {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState(null);

  const fetchedData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts?limit=300");
      const json = await response.json();
      setPosts(json.posts);
    } catch (err) {
      setErrors(err.message);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <main className="container">
      <h1>Latest Posts</h1>
      {[
          ...Array(10)
            .keys()
            .map((n) => (
              <button
                key={n}
              >
                {n + 1}
              </button>
            )),
        ]}
      {errors && <p className="error">Error: {errors}</p>}
      {posts.length ? (
        <section className="posts-grid">
          {posts.map((p) => (
            <PostCard
            key={p.id}
            id={p.id}
            title={p.title}
            body={p.body}
            likes={p.reactions.likes}
            dislikes={p.reactions.dislikes}
            views={p.views}
            />
          ))}
        </section>
      ) : (
        <p>No posts found.</p>
      )}
    </main>
  );
}

export default App;
