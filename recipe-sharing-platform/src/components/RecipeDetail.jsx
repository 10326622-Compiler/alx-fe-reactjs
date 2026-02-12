import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID from the URL parameters
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  // Loading state
  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading recipe...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center transition duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Recipes
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Recipe Details</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Recipe Hero Section */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
          <div className="md:flex">
            {/* Recipe Image */}
            <div className="md:w-1/2">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>

            {/* Recipe Title and Summary */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {recipe.summary}
              </p>

              {/* Recipe Meta Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-semibold">
                    {recipe.ingredients?.length || 0} ingredients
                  </span>
                </div>
                <div className="flex items-center text-gray-700 mt-2">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <span className="font-semibold">
                    {recipe.instructions?.length || 0} steps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <svg
              className="w-8 h-8 text-indigo-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <h3 className="text-3xl font-bold text-gray-800">Ingredients</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition duration-200"
                >
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{ingredient}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Cooking Instructions Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <svg
              className="w-8 h-8 text-indigo-600 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <h3 className="text-3xl font-bold text-gray-800">
              Cooking Instructions
            </h3>
          </div>

          <div className="space-y-6">
            {recipe.instructions &&
              recipe.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1.5">
                    {instruction}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Browse More Recipes
          </Link>
        </div>
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

export default RecipeDetail;
