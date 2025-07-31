import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe, onView }) {
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt="author" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="view-btn" onClick={onView}>
                    VIEW RECIPE
                </button>
            </div>
        </div>
    );
}
