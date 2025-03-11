/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const getData = async () => {
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + query);
    const json = await data.json();
    setData(json?.recipes);
  };

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {data.map((r) => (
        <ul key={r.id}>
          <li>{r.name}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
