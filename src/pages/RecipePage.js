import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeDetail from "../components/RecipeDetail";

export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch recipe");
        return res.json();
      })
      .then(data => {
        setRecipe(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Recipe not found");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;

  return <RecipeDetail recipe={recipe} onClose={null} />;
}
