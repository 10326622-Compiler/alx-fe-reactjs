// src/components/FavoritesList.jsx
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  // Pull favorites and map them to the full recipe objects
  const favorites = useRecipeStore(state => 
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id)).filter(Boolean)
  );

  return (
    <div style={{ padding: '10px', border: '1px solid #eee', borderRadius: '8px' }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet. Start hearting some recipes!</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id} style={{ margin: '10px 0', borderBottom: '1px solid #fafafa' }}>
            <h3>{recipe.title}</h3>
            <p style={{ fontSize: '0.9em', color: '#666' }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

// This is the line that was missing:
export default FavoritesList;