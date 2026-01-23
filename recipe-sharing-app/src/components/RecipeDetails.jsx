// Inside src/components/RecipeDetails.jsx
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  // ... existing hooks
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipe?.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div>
      {/* ... existing title and description */}
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      {/* ... existing edit and delete buttons */}
    </div>
  );
};