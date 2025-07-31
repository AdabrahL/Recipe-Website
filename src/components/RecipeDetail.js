import CustomImage from "./CustomImage";

export default function RecipeDetail({ recipe, onClose }) {
    return (
        <div className="recipe-detail section">
            <h2>{recipe.title}</h2>
            <CustomImage imgSrc={recipe.image} pt="50%" />
            <div className="author-section">
                <img className="auther-img" src={recipe.authorImg} alt="author" />
                <p><strong>By:</strong> Chef</p>
            </div>
            <p><a href={recipe.url} target="_blank" rel="noopener noreferrer">View full recipe</a></p>

            <button className="btn" onClick={onClose}>← Hide Recipe</button>
        </div>
    );
}
