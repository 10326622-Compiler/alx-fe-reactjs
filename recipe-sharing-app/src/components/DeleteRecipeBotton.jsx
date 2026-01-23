// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    // Confirm with the user before deleting (optional but recommended)
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/'); // Redirect to the recipe list
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      style={{ backgroundColor: '#ff4d4d', color: 'white', marginTop: '10px' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;