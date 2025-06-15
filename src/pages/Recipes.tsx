
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';

const Recipes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Update search query when URL params change
  useEffect(() => {
    const searchFromUrl = searchParams.get('search') || '';
    setSearchQuery(searchFromUrl);
  }, [searchParams]);

  // Mock data with updated images for Margherita and Beef Tacos
  const mockRecipes = [
    {
      id: 1,
      title: "Mediterranean Pasta Salad",
      description: "Fresh and vibrant pasta salad with Mediterranean flavors, perfect for summer gatherings and picnics.",
      image_url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=300&fit=crop",
      ingredients: "Pasta, tomatoes, olives, feta cheese, olive oil",
      instructions: "Cook pasta, mix with vegetables and dressing",
      created_at: "2024-01-15"
    },
    {
      id: 2,
      title: "Homemade Pizza Margherita",
      description: "Classic Italian pizza with fresh basil, mozzarella, and a crispy homemade crust.",
      image_url: "https://images.unsplash.com/photo-1590534247854-3d4e52ea60f3?w=500&h=300&fit=crop",
      ingredients: "Pizza dough, tomato sauce, mozzarella, basil",
      instructions: "Roll dough, add toppings, bake at 450°F",
      created_at: "2024-01-14"
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      description: "Perfectly chewy chocolate chip cookies that melt in your mouth with every bite.",
      image_url: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=300&fit=crop",
      ingredients: "Flour, butter, sugar, chocolate chips, eggs",
      instructions: "Mix ingredients, form balls, bake for 12 minutes",
      created_at: "2024-01-13"
    },
    {
      id: 4,
      title: "Grilled Salmon with Herbs",
      description: "Perfectly grilled salmon with fresh herbs and a light lemon glaze.",
      image_url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop",
      ingredients: "Salmon, herbs, lemon, olive oil",
      instructions: "Season salmon, grill for 6-8 minutes per side",
      created_at: "2024-01-12"
    },
    {
      id: 5,
      title: "Caesar Salad",
      description: "Crispy romaine lettuce with homemade Caesar dressing and parmesan cheese.",
      image_url: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&h=300&fit=crop",
      ingredients: "Romaine lettuce, Caesar dressing, parmesan, croutons",
      instructions: "Toss lettuce with dressing, add toppings",
      created_at: "2024-01-11"
    },
    {
      id: 6,
      title: "Beef Tacos",
      description: "Flavorful beef tacos with fresh toppings and homemade salsa.",
      image_url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      ingredients: "Ground beef, taco shells, lettuce, tomatoes, cheese",
      instructions: "Cook beef with spices, assemble tacos with toppings",
      created_at: "2024-01-10"
    }
  ];

  const categories = ['all', 'breakfast', 'lunch', 'dinner', 'dessert', 'snack'];

  const filteredRecipes = mockRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      setSearchParams({ search: value.trim() });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Recipe Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover delicious recipes from around the world, carefully curated for every taste and occasion.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search recipes by name or ingredient..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No recipes found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or browse all recipes.
            </p>
            <button
              onClick={() => handleSearchChange('')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-300"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
