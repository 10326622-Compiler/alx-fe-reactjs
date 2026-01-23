// src/components/RecommendationsList.jsx
import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{ padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? <p>Check back later for suggestions!</p> : recommendations.map(recipe => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #ccc' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;