import { useEffect, useState } from "react";
import "./App.css";
import PostCard from "./components/PostCard";

function App() {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 10;

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

  const totalPosts = posts.length;
  const noOfPage = Math.ceil(totalPosts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const currPage = (n) => {
    setCurrentPage(n);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <main className="container">
      <h1 className="heading">Latest Posts</h1>
      <div className="buttons">
        <button className="btn" disabled={currentPage === 0} onClick={prevPage}>
          ◀
        </button>
        {[
          ...Array(noOfPage)
            .keys()
            .map((n) => (
              <button
                className={n === currentPage ? "active" : "btn"}
                key={n}
                onClick={() => currPage(n)}
              >
                {n + 1}
              </button>
            )),
        ]}
        <button
          className="btn"
          disabled={currentPage == noOfPage - 1}
          onClick={nextPage}
        >
          ▶
        </button>
      </div>
      {errors && <p className="error">Error: {errors}</p>}
      {posts.length ? (
        <section className="posts-grid">
          {posts.slice(start, end).map((p) => (
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
