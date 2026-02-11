<div
  className="bg-white rounded-lg shadow-md overflow-hidden 
                hover:shadow-xl transform hover:scale-105 
                transition duration-300 ease-in-out"
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
    <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
      {recipe.title}
    </h3>
    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{recipe.summary}</p>
    <button
      className="w-full bg-indigo-600 text-white py-2 px-4 
                       rounded-lg hover:bg-indigo-700 transition duration-200"
    >
      View Recipe
    </button>
  </div>
</div>;
