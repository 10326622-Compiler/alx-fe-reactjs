// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Favorites Actions
  addFavorite: (recipeId) => set((state) => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),

  // Recommendations Logic (Mock implementation)
  generateRecommendations: () => set((state) => {
    // Simple logic: Recommend recipes that are NOT favorites but match some favorite titles
    const recommended = state.recipes.filter(recipe => 
      !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Existing search/filter actions...
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(r => r.id !== recipeId)
  })),
  updateRecipe: (updated) => set((state) => ({
    recipes: state.recipes.map(r => r.id === updated.id ? updated : r)
  })),
}));