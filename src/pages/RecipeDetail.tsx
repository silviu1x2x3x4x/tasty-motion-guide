
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat } from 'lucide-react';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - this will be replaced with Supabase data
  const mockRecipe = {
    id: Number(id),
    title: "Mediterranean Pasta Salad",
    description: "Fresh and vibrant pasta salad with Mediterranean flavors, perfect for summer gatherings and picnics. This recipe combines the best of Mediterranean cuisine with fresh vegetables, herbs, and a tangy dressing.",
    image_url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
    ingredients: [
      "1 lb pasta (penne or rotini)",
      "2 cups cherry tomatoes, halved",
      "1 cup kalamata olives, pitted",
      "1 cup feta cheese, crumbled",
      "1/2 red onion, thinly sliced",
      "1/2 cup extra virgin olive oil",
      "1/4 cup red wine vinegar",
      "2 cloves garlic, minced",
      "1 tsp dried oregano",
      "1/2 cup fresh basil, chopped",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook pasta according to package directions until al dente. Drain and rinse with cold water.",
      "In a large bowl, combine the cooled pasta, cherry tomatoes, olives, feta cheese, and red onion.",
      "In a small bowl, whisk together olive oil, red wine vinegar, minced garlic, and oregano.",
      "Pour the dressing over the pasta mixture and toss gently to combine.",
      "Add fresh basil and season with salt and pepper to taste.",
      "Refrigerate for at least 30 minutes before serving to allow flavors to meld.",
      "Serve chilled or at room temperature. Garnish with additional basil if desired."
    ],
    prep_time: "20 minutes",
    cook_time: "15 minutes",
    servings: 6,
    created_at: "2024-01-15"
  };

  if (!mockRecipe) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recipe not found</h2>
          <Link to="/recipes" className="text-emerald-600 hover:text-emerald-700">
            ← Back to recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <img 
          src={mockRecipe.image_url} 
          alt={mockRecipe.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="absolute top-8 left-8">
          <Link 
            to="/recipes" 
            className="inline-flex items-center text-white hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Recipes
          </Link>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {mockRecipe.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            {mockRecipe.description}
          </p>
        </div>
      </div>

      {/* Recipe Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Prep Time</h3>
                <p className="text-gray-600 dark:text-gray-400">{mockRecipe.prep_time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Cook Time</h3>
                <p className="text-gray-600 dark:text-gray-400">{mockRecipe.cook_time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Servings</h3>
                <p className="text-gray-600 dark:text-gray-400">{mockRecipe.servings} people</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ingredients</h2>
              <ul className="space-y-3">
                {mockRecipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Instructions</h2>
              <ol className="space-y-6">
                {mockRecipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
