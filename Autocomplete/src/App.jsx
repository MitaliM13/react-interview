/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const getData = async () => {
    if (cache[query]) {
      console.log("CACHE RETURNED", query);
      setData(cache[query]);
      return;
    }

    console.log("API CALL", query);
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    const json = await response.json();
    setData(json?.recipes);
    setCache((prev) => ({ ...prev, [query]: json?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(getData, 400);
    return () => clearTimeout(timer);
  }, [query]);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="app-container">
      <div className="search-box">
        <input
          className="input"
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
        {showResults && data.length > 0 && (
          <div className="results-dropdown">
            {data.map((r) => (
              <div key={r.id} className="search-result">
                {r.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="recipe-container">
        {data.length > 0 ? (
          data.map((r) => (
            <div key={r.id} className="recipe-card">
              <img src={r.image} alt={r.name} />
              <h3>{r.name}</h3>
              <div className="recipe-details">
                <p>
                  Servings: <strong>{r.servings}</strong>
                </p>
                <p>
                  Difficulty: <strong>{r.difficulty}</strong>
                </p>
                <p>
                  Cuisine: <strong>{r.cuisine}</strong>
                </p>
              </div>
              <div>
                <button className="btn" onClick={() => openModal(r)}>
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No recipes found. Try searching!</p>
        )}
      </div>

      {selectedRecipe && (
        <div onClick={closeModal} className="modal-overlay">
          <div onClick={(e) => e.stopPropagation()} className="modal-content">
            <span onClick={closeModal} className="close-btn">
              x
            </span>
            <h2>{selectedRecipe.name}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.name} />
            <div className="recipe-details">
              <p>
                <strong>Servings:</strong> {selectedRecipe.servings}
              </p>
              <p>
                <strong>Difficulty:</strong> {selectedRecipe.difficulty}
              </p>
              <p>
                <strong>Cuisine:</strong> {selectedRecipe.cuisine}
              </p>
            </div>
            <h3 className="ingredients">Ingredients:</h3>
            <ul className="ing-list">
              {selectedRecipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Instructions:</h3>
            <ul className="instructions-list">
              {selectedRecipe.instructions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
