import CustomImage from "./CustomImage";

export default function RecipeDetail({ recipe, onClose }) {
  return (
    <div className="recipe-detail section">
      {/* Top Section: Title + Image */}
      <div className="recipe-header">
        <h2 className="recipe-title">{recipe.name}</h2>
        <CustomImage imgSrc={recipe.image} pt="50%" />
      </div>

      {/* Meta Information Section */}
      <div className="recipe-meta-info">
        <div className="meta-item">
          <span>Cuisine:</span> <strong>{recipe.cuisine}</strong>
        </div>
        <div className="meta-item">
          <span>Difficulty:</span> <strong>{recipe.difficulty}</strong>
        </div>
        <div className="meta-item">
          <span>Servings:</span> <strong>{recipe.servings}</strong>
        </div>
      </div>

      {/* Main Content: Ingredients + Instructions */}
      <div className="recipe-content">
        <div className="recipe-section ingredients">
          <h3>🧂 Ingredients</h3>
          <ul className="recipe-list">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-section instructions">
          <h3>📋 Instructions</h3>
          <ol className="recipe-steps">
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Footer */}
      {onClose && (
        <div className="recipe-footer">
          <button className="btn back-btn" onClick={onClose}>
            ← Hide Recipe
          </button>
        </div>
      )}
    </div>
  );
}
