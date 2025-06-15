import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat } from 'lucide-react';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - this will be replaced with Supabase data
  const mockRecipes = [
    {
      id: 1,
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
    },
    {
      id: 2,
      title: "Homemade Pizza Margherita",
      description: "Classic Italian pizza with fresh basil, mozzarella, and a crispy homemade crust. A timeless recipe that brings the authentic taste of Italy to your kitchen.",
      image_url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
      ingredients: [
        "2 cups all-purpose flour",
        "1 tsp active dry yeast",
        "1 tsp salt",
        "3/4 cup warm water",
        "2 tbsp olive oil",
        "1/2 cup pizza sauce",
        "8 oz fresh mozzarella, sliced",
        "Fresh basil leaves",
        "Salt and pepper to taste"
      ],
      instructions: [
        "In a large bowl, combine flour, yeast, and salt.",
        "Add warm water and olive oil, mix until a dough forms.",
        "Knead the dough on a floured surface for 8-10 minutes until smooth.",
        "Place in an oiled bowl, cover, and let rise for 1 hour.",
        "Preheat oven to 475°F (245°C).",
        "Roll out dough on a floured surface to desired thickness.",
        "Transfer to a pizza stone or baking sheet.",
        "Spread pizza sauce evenly, add mozzarella slices.",
        "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
        "Remove from oven, top with fresh basil leaves before serving."
      ],
      prep_time: "20 minutes",
      cook_time: "15 minutes",
      servings: 4,
      created_at: "2024-01-14"
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      description: "Perfectly chewy chocolate chip cookies that melt in your mouth with every bite. The ultimate comfort food that never goes out of style.",
      image_url: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop",
      ingredients: [
        "2 1/4 cups all-purpose flour",
        "1 tsp baking soda",
        "1 tsp salt",
        "1 cup butter, softened",
        "3/4 cup granulated sugar",
        "3/4 cup brown sugar",
        "2 large eggs",
        "2 tsp vanilla extract",
        "2 cups chocolate chips"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "In a bowl, whisk together flour, baking soda, and salt.",
        "In a large bowl, cream together butter and both sugars until fluffy.",
        "Beat in eggs one at a time, then add vanilla.",
        "Gradually mix in the flour mixture until just combined.",
        "Stir in chocolate chips.",
        "Drop rounded tablespoons of dough onto ungreased baking sheets.",
        "Bake for 9-11 minutes until golden brown.",
        "Cool on baking sheet for 2 minutes before transferring to wire rack."
      ],
      prep_time: "15 minutes",
      cook_time: "12 minutes",
      servings: 36,
      created_at: "2024-01-13"
    },
    {
      id: 4,
      title: "Grilled Salmon with Herbs",
      description: "Perfectly grilled salmon with fresh herbs and a light lemon glaze. A healthy and delicious meal that's ready in minutes.",
      image_url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop",
      ingredients: [
        "4 salmon fillets (6 oz each)",
        "2 tbsp olive oil",
        "2 lemons, juiced and zested",
        "2 cloves garlic, minced",
        "2 tbsp fresh dill, chopped",
        "2 tbsp fresh parsley, chopped",
        "1 tsp salt",
        "1/2 tsp black pepper"
      ],
      instructions: [
        "Preheat grill to medium-high heat.",
        "In a small bowl, mix olive oil, lemon juice, zest, garlic, dill, and parsley.",
        "Season salmon fillets with salt and pepper.",
        "Brush salmon with half of the herb mixture.",
        "Grill salmon for 4-5 minutes per side, depending on thickness.",
        "Brush with remaining herb mixture while grilling.",
        "Remove from grill when fish flakes easily with a fork.",
        "Serve immediately with lemon wedges."
      ],
      prep_time: "10 minutes",
      cook_time: "10 minutes",
      servings: 4,
      created_at: "2024-01-12"
    },
    {
      id: 5,
      title: "Caesar Salad",
      description: "Crispy romaine lettuce with homemade Caesar dressing and parmesan cheese. A classic salad that's always a crowd pleaser.",
      image_url: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&h=600&fit=crop",
      ingredients: [
        "2 large heads romaine lettuce, chopped",
        "1/2 cup mayonnaise",
        "2 tbsp lemon juice",
        "2 cloves garlic, minced",
        "1 tsp Worcestershire sauce",
        "1/2 cup grated Parmesan cheese",
        "2 cups croutons",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Wash and chop romaine lettuce, pat dry.",
        "In a large bowl, whisk together mayonnaise, lemon juice, garlic, and Worcestershire sauce.",
        "Add chopped lettuce to the bowl and toss to coat.",
        "Sprinkle with Parmesan cheese and croutons.",
        "Season with salt and pepper to taste.",
        "Toss gently and serve immediately."
      ],
      prep_time: "15 minutes",
      cook_time: "0 minutes",
      servings: 4,
      created_at: "2024-01-11"
    },
    {
      id: 6,
      title: "Beef Tacos",
      description: "Flavorful beef tacos with fresh toppings and homemade salsa. Perfect for a quick weeknight dinner or weekend gathering.",
      image_url: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&h=600&fit=crop",
      ingredients: [
        "1 lb ground beef",
        "1 packet taco seasoning",
        "8 taco shells",
        "1 cup lettuce, shredded",
        "2 tomatoes, diced",
        "1 cup cheddar cheese, shredded",
        "1/2 cup sour cream",
        "1/4 cup onion, diced",
        "Salsa for serving"
      ],
      instructions: [
        "Cook ground beef in a large skillet over medium heat until browned.",
        "Drain excess fat from the beef.",
        "Add taco seasoning and 3/4 cup water to the beef.",
        "Simmer for 10 minutes, stirring occasionally.",
        "Warm taco shells according to package directions.",
        "Fill each shell with seasoned beef.",
        "Top with lettuce, tomatoes, cheese, sour cream, and onion.",
        "Serve with salsa on the side."
      ],
      prep_time: "10 minutes",
      cook_time: "15 minutes",
      servings: 4,
      created_at: "2024-01-10"
    }
  ];

  const recipe = mockRecipes.find(r => r.id === Number(id));

  if (!recipe) {
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
          src={recipe.image_url} 
          alt={recipe.title}
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
            {recipe.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            {recipe.description}
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
                <p className="text-gray-600 dark:text-gray-400">{recipe.prep_time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Cook Time</h3>
                <p className="text-gray-600 dark:text-gray-400">{recipe.cook_time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Servings</h3>
                <p className="text-gray-600 dark:text-gray-400">{recipe.servings} {recipe.servings === 1 ? 'person' : recipe.id === 3 ? 'cookies' : 'people'}</p>
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
                {recipe.ingredients.map((ingredient, index) => (
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
                {recipe.instructions.map((instruction, index) => (
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
