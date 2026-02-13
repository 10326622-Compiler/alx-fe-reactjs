import { useState } from "react";

function AddRecipeForm() {
  // Form state
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Alternative: You can also access directly via e.target.value and e.target.name
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    // Validate title
    if (!formData.title.trim()) {
      newErrors.title = "Recipe title is required";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Recipe title must be at least 3 characters";
    }

    // Validate ingredients
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      // Check if there are at least 2 ingredients (separated by new lines or commas)
      const ingredientList = formData.ingredients
        .split(/\n|,/)
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

      if (ingredientList.length < 2) {
        newErrors.ingredients =
          "Please enter at least 2 ingredients (one per line or separated by commas)";
      }
    }

    // Validate preparation steps
    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    } else if (formData.steps.trim().length < 10) {
      newErrors.steps =
        "Please provide more detailed preparation steps (at least 10 characters)";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after successful submission
      setFormData({
        title: "",
        ingredients: "",
        steps: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Add New Recipe
          </h1>
          <p className="text-gray-600">
            Share your delicious recipe with the community
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg shadow-md animate-fade-in">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-green-800 font-semibold">Success!</h3>
                <p className="text-green-700 text-sm">
                  Your recipe has been submitted successfully.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          {/* Recipe Title */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Recipe Title
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 ${
                errors.title
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              }`}
              placeholder="Enter recipe title (e.g., Chocolate Chip Cookies)"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.title}
              </p>
            )}
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <label
              htmlFor="ingredients"
              className="block text-gray-700 font-semibold mb-2"
            >
              Ingredients
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="6"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 resize-y ${
                errors.ingredients
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              }`}
              placeholder="Enter ingredients (one per line)&#10;&#10;Example:&#10;2 cups all-purpose flour&#10;1 cup sugar&#10;3 large eggs&#10;1 tsp vanilla extract"
            />
            {errors.ingredients && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.ingredients}
              </p>
            )}
            <p className="mt-2 text-sm text-gray-500">
              💡 Tip: Enter each ingredient on a new line or separate with
              commas
            </p>
          </div>

          {/* Preparation Steps */}
          <div className="mb-8">
            <label
              htmlFor="steps"
              className="block text-gray-700 font-semibold mb-2"
            >
              Preparation Steps
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="steps"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              rows="8"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 resize-y ${
                errors.steps
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              }`}
              placeholder="Describe the preparation steps in detail&#10;&#10;Example:&#10;1. Preheat oven to 350°F (175°C).&#10;2. In a large bowl, mix flour and sugar.&#10;3. Add eggs and vanilla, mix until combined.&#10;4. Pour into greased pan and bake for 30 minutes."
            />
            {errors.steps && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.steps}
              </p>
            )}
            <p className="mt-2 text-sm text-gray-500">
              💡 Tip: Number your steps and be as detailed as possible
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold text-white transition duration-300 transform ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:scale-105 active:scale-95"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Recipe"
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setFormData({ title: "", ingredients: "", steps: "" });
                setErrors({});
              }}
              className="flex-1 sm:flex-none py-3 px-6 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition duration-200"
            >
              Clear Form
            </button>
          </div>

          {/* Form Info */}
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <p className="text-sm text-indigo-800">
              <span className="font-semibold">Note:</span> All fields marked
              with
              <span className="text-red-500 mx-1">*</span> are required. Make
              sure to provide at least 2 ingredients and detailed preparation
              steps.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
