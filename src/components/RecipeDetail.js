import CustomImage from "./CustomImage";

export default function RecipeDetail({ recipe, onClose }) {
  return (
    <div className="recipe-detail section">
      {/* Title */}
      <h2 className="recipe-title">{recipe.name}</h2>

      {/* Image */}
      <CustomImage imgSrc={recipe.image} pt="50%" />

      {/* Meta Information */}
      <div className="recipe-meta-detail">
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
      </div>

      {/* Ingredients List */}
      <div className="recipe-section">
        <h3>🧂 Ingredients</h3>
        <ul className="recipe-list">
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>

      {/* Instructions List */}
      <div className="recipe-section">
        <h3>📋 Instructions</h3>
        <ol className="recipe-steps">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Close Button (optional) */}
      {onClose && (
        <button className="btn back-btn" onClick={onClose}>
          ← Hide Recipe
        </button>
      )}
    </div>
  );
}
