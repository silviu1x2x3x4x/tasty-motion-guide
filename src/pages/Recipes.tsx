
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

  // Mock data with Romanian recipes
  const mockRecipes = [
    {
      id: 1,
      title: "Tochitura Moldoveneasca",
      description: "Traditionala tochitura moldoveneasca cu carne de porc, carnati si oua, servita cu mamaliga si branza.",
      image_url: "https://images.unsplash.com/photo-1565057824294-36bdf6a28a5c?w=500&h=300&fit=crop",
      ingredients: "Carne de porc, carnati, oua, ceapa, usturoi, mamaliga",
      instructions: "Prajeste carnea, adauga carnatii, serveste cu oua si mamaliga",
      created_at: "2024-01-15"
    },
    {
      id: 2,
      title: "Pizza Margherita de Casa",
      description: "Pizza italiana clasica cu busuioc proaspat, mozzarella si o crusta crocanta facuta in casa.",
      image_url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=300&fit=crop",
      ingredients: "Aluat de pizza, sos de rosii, mozzarella, busuioc",
      instructions: "Intinde aluatul, adauga toppingurile, coace la 450°F",
      created_at: "2024-01-14"
    },
    {
      id: 3,
      title: "Biscuiti cu Bucati de Ciocolata",
      description: "Biscuiti perfecti cu bucati de ciocolata care se topesc in gura la fiecare muscatura.",
      image_url: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=300&fit=crop",
      ingredients: "Faina, unt, zahar, bucati de ciocolata, oua",
      instructions: "Amesteca ingredientele, formeaza bilute, coace timp de 12 minute",
      created_at: "2024-01-13"
    },
    {
      id: 4,
      title: "Musaca Traditionala",
      description: "Musaca delicioasa cu straturi de vinete, carne tocata si sos bechamel cremos.",
      image_url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop",
      ingredients: "Vinete, carne tocata, sos bechamel, rosii, ceapa",
      instructions: "Stratifică vinetele cu carnea si sosul, coace la cuptor",
      created_at: "2024-01-12"
    },
    {
      id: 5,
      title: "Tiramisu Italian",
      description: "Desert italian clasic cu piscuri inmuiate in cafea si crema mascarpone.",
      image_url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=300&fit=crop",
      ingredients: "Piscuri, cafea, mascarpone, oua, zahar, cacao",
      instructions: "Alternează straturile de piscuri cu crema, raceste peste noapte",
      created_at: "2024-01-11"
    },
    {
      id: 6,
      title: "Chec de Casa",
      description: "Chec pufos si aromat de casa, perfect pentru micul dejun sau o gustare dulce.",
      image_url: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&h=300&fit=crop",
      ingredients: "Faina, oua, zahar, lapte, unt, praf de copt",
      instructions: "Amesteca ingredientele, toarna in forma, coace la cuptor",
      created_at: "2024-01-10"
    }
  ];

  const categories = ['toate', 'mic dejun', 'pranz', 'cina', 'desert', 'gustare'];

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
            Colectia Noastra de Retete
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descopera retete delicioase din intreaga lume, atent selectate pentru fiecare gust si ocazie.
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
                placeholder="Cauta retete dupa nume sau ingredient..."
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
            Se afiseaza {filteredRecipes.length} reteta{filteredRecipes.length !== 1 ? 's' : ''}
            {searchQuery && ` pentru "${searchQuery}"`}
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
              Nu s-au gasit retete
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Incearca sa ajustezi cautarea sau navighează prin toate retetele.
            </p>
            <button
              onClick={() => handleSearchChange('')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-300"
            >
              Sterge Cautarea
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
