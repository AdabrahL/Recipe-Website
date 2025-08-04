import { useEffect, useState } from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import RecipeDetail from "../components/RecipeDetail";

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(data => {
        setRecipes(data.recipes.sort(() => Math.random() - 0.5));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Could not load recipes");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading recipes…</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <PreviousSearches
        onSearch={(term) => {
          const match = recipes.find(
            (r) => r.name.toLowerCase() === term.toLowerCase()
          );
          if (match) {
            setSelectedRecipe(match);
          } else {
            console.log("No recipe found for:", term);
          }
        }}
      />

      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      <div className="recipes-container">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onView={() => setSelectedRecipe(recipe)}
          />
        ))}
      </div>
    </div>
  );
}
