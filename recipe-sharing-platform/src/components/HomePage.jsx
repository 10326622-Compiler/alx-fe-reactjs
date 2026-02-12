import { useState, useEffect } from "react";
import recipeData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipe data when component mounts
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-indigo-600 text-center">
            Recipe Sharing Platform
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Discover and share amazing recipes from around the world
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Featured Recipes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of delicious recipes. Click on any recipe to
            view the full details.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* Recipe Image */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              {/* Recipe Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>

                {/* View Recipe Button */}
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 font-medium">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No recipes found. Add some delicious recipes to get started!
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2026 Recipe Sharing Platform. Share the love of cooking!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
