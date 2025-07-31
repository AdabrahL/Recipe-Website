import { useState } from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import RecipeDetail from "../components/RecipeDetail"; // Create this component
import recipesData from "../data/recipes";

export default function Recipes() {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const recipes = [...recipesData].sort(() => Math.random() - 0.5);

    return (
        <div>
            <PreviousSearches />
            {/* Show detail only if a recipe is selected */}
            {selectedRecipe && (
                <RecipeDetail recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
            )}
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard
                        key={index}
                        recipe={recipe}
                        onView={() => setSelectedRecipe(recipe)}
                    />
                ))}
            </div>
        </div>
    );
}
