import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function PreviousSearches({ onSearch }) {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const previousSearches = ["pizza", "burger", "cookies", "juice", "biriyani", "salad"];

  // Fetch recipes once
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data.recipes))
      .catch(err => console.error("Failed to fetch recipes:", err));
  }, []);

  // Filter suggestions as user types
  useEffect(() => {
    if (input.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Limit to top 5
    }
  }, [input, recipes]);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
      setSuggestions([]);
    }
  };

  // Handle click from suggestions or previous searches
  const handleSearchClick = (searchTerm) => {
    onSearch(searchTerm);
    setInput("");
    setSuggestions([]);
  };

  return (
    <div className="previous-searches section">
      <h2>Search Recipes</h2>

      {/* Previous Search Tags */}
      <div className="previous-searches-container">
        {previousSearches.map((term, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="search-item"
            onClick={() => handleSearchClick(term)}
          >
            {term}
          </div>
        ))}
      </div>

      {/* Search Input */}
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      {/* Live Suggestions */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((recipe) => (
            <li
              key={recipe.id}
              onClick={() => handleSearchClick(recipe.name)}
              className="suggestion-item"
            >
              {recipe.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
