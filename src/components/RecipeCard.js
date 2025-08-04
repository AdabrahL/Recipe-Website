import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <p className="recipe-title">{recipe.name}</p>
        <p className="recipe-meta">{recipe.cuisine} • {recipe.difficulty}</p>
        <Link to={`/recipes/${recipe.id}`} className="view-btn">
          VIEW RECIPE
        </Link>
      </div>
    </div>
  );
}
