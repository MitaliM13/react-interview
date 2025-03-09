import { useEffect, useState } from "react";
import "./App.css";
import PostCard from "./components/PostCard";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const PAGE_SIZE = 10;

  const fetchedData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts?limit=300");
      const json = await response.json();
      setPosts(json.posts);
      setFilteredPosts(json.posts);
    } catch (err) {
      setErrors(err.message);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
    setCurrentPage(0);
  }, [searchQuery, posts]);

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
    <>
      <main className="container">
        <h1 className="heading">Latest Posts</h1>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Pagination
          currentPage={currentPage}
          prevPage={prevPage}
          noOfPage={noOfPage}
          currPage={currPage}
          nextPage={nextPage}
        />
        {errors && <p className="error">Error: {errors}</p>}
        {filteredPosts.length ? (
          <section className="posts-grid">
            {filteredPosts.slice(start, end).map((p) => (
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
    </>
  );
}

export default App;
