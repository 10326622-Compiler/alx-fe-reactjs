// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  // Action to add a recipe
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  // Action to initialize or overwrite the recipes list
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };