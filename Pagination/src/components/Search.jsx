import { useState } from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  const [input, setInput] = useState(searchQuery);

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(input);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search Posts..."
        value={input}
        onChange={handleSearch}
      />
      <button className="search-btn" type="submit">
        🔍
      </button>
    </form>
  );
};

export default Search;
