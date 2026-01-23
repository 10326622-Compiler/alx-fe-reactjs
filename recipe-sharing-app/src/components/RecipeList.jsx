// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
   <div key={recipe.id}>
  <h3>{recipe.title}</h3>
  <p>{recipe.description}</p>
  <Link to={`/recipe/${recipe.id}`}>View Details</Link>
</div>
  );
};

export default RecipeList;